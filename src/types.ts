/**
 * Types helpers
 *
 * Do not put any specific types here, only generic types
 */

export type Unpromise<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U
  : never
