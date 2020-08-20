import { Auto, Kind, OrFix, URIS, Base, Intro, Mix } from "../HKT"

import { Either } from "@effect-ts/system/Either"

export interface AssociativeEither<F extends URIS, C = Auto> extends Base<F, C> {
  readonly either: <N2 extends string, K2, SI2, SO2, X2, I2, S2, R2, E2, B>(
    fb: Kind<
      F,
      OrFix<"N", C, N2>,
      OrFix<"K", C, K2>,
      SI2,
      SO2,
      OrFix<"X", C, X2>,
      OrFix<"I", C, I2>,
      OrFix<"S", C, S2>,
      OrFix<"R", C, R2>,
      OrFix<"E", C, E2>,
      B
    >
  ) => <N extends string, K, SI, SO, X, I, S, R, E, A>(
    fa: Kind<
      F,
      OrFix<"N", C, N>,
      OrFix<"K", C, K>,
      SI,
      SO,
      OrFix<"X", C, Intro<C, "X", X2, X>>,
      OrFix<"I", C, Intro<C, "I", I2, I>>,
      OrFix<"S", C, Intro<C, "S", S2, S>>,
      OrFix<"R", C, Intro<C, "R", R2, R>>,
      OrFix<"E", C, Intro<C, "E", E2, E>>,
      A
    >
  ) => Kind<
    F,
    OrFix<"N", C, N | N2>,
    OrFix<"K", C, K | K2>,
    SI & SI2,
    SO | SO2,
    OrFix<"X", C, Mix<C, "X", [X2, X]>>,
    OrFix<"I", C, Mix<C, "I", [I2, I]>>,
    OrFix<"S", C, Mix<C, "S", [S2, S]>>,
    OrFix<"R", C, Mix<C, "R", [R2, R]>>,
    OrFix<"E", C, Mix<C, "E", [E2, E]>>,
    Either<A, B>
  >
}