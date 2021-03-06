import type { Option } from "@effect-ts/system/Option"

import type * as HKT from "../HKT"

export interface Compact<F extends HKT.URIS, C = HKT.Auto> extends HKT.Base<F, C> {
  readonly compact: <N extends string, K, Q, W, X, I, S, R, E, A>(
    fa: HKT.Kind<F, C, N, K, Q, W, X, I, S, R, E, Option<A>>
  ) => HKT.Kind<F, C, N, K, Q, W, X, I, S, R, E, A>
}
