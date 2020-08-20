import { Any } from "../Any"
import { AssociativeBoth } from "../AssociativeBoth"
import { AssociativeEither } from "../AssociativeEither"
import { AssociativeFlatten } from "../AssociativeFlatten"
import { Covariant } from "../Covariant"
import { Auto, URIS } from "../HKT"
import { None } from "../None"

export type IdentityBoth<F extends URIS, C = Auto> = AssociativeBoth<F, C> & Any<F, C>

export type IdentityEither<F extends URIS, C = Auto> = AssociativeEither<F, C> &
  None<F, C>

export type IdentityFlatten<F extends URIS, C = Auto> = AssociativeFlatten<F, C> &
  Any<F, C>

export type Monad<F extends URIS, C = Auto> = IdentityFlatten<F, C> & Covariant<F, C>

export type Applicative<F extends URIS, C = Auto> = IdentityBoth<F, C> & Covariant<F, C>