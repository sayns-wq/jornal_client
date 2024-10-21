import { getElement } from "@/utils";
import { RefObject, useEffect, useRef, useState } from "react";

type UseIntersectionObserverTarget =
  | RefObject<Element | null | undefined>
  | (() => Element)
  | Element;

interface UseIntersectionObserverOptions
  extends Omit<IntersectionObserverInit, "root"> {
  enabled?: boolean;
  onChange?: (entry: IntersectionObserverEntry) => void;
  root?:
    | IntersectionObserverInit["root"]
    | RefObject<Element | null | undefined>;
}

export interface UseIntersectionObserverReturn {
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export interface UseIntersectionObserver {
  <Target extends UseIntersectionObserverTarget>(
    target: Target,
    options?: UseIntersectionObserverOptions
  ): UseIntersectionObserverReturn;

  <Target extends UseIntersectionObserverTarget>(
    options?: UseIntersectionObserverOptions,
    target?: never
  ): UseIntersectionObserverReturn & { ref: (node: Target) => void };
}

export const useIntersectionObserver = ((...params: any[]) => {
  const target = (
    typeof params[0] === "object" && !("current" in params[0])
      ? undefined
      : params[0]
  ) as UseIntersectionObserverTarget | undefined;
  const options = (target ? params[1] : params[0]) as
    | UseIntersectionObserverOptions
    | undefined;
  const enabled = options?.enabled ?? true;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const [internalRef, setInternalRef] = useState<Element>();
  const internalOnChangeRef =
    useRef<UseIntersectionObserverOptions["onChange"]>();
  internalOnChangeRef.current = options?.onChange;

  useEffect(() => {
    if (!enabled && !target && !internalRef) return;
    const element = target ? getElement(target) : internalRef;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        internalOnChangeRef.current?.(entry);
      },
      {
        ...options,
        root: options?.root
          ? (getElement(options?.root) as Element | Document)
          : document,
      }
    );

    observer.observe(element as Element);

    return () => {
      observer.disconnect();
    };
  }, [
    target,
    internalRef,
    options?.rootMargin,
    options?.threshold,
    options?.root,
    enabled,
  ]);

  if (target) return { entry, inView: !!entry?.isIntersecting };
  return {
    ref: setInternalRef,
    entry,
    inView: !!entry?.isIntersecting,
  };
}) as UseIntersectionObserver;
