import { pipe } from "../../Function"
import { environment, map } from "../deps"
import { Managed } from "../managed"
import type { ReleaseMap } from "../releaseMap"
import { noopFinalizer } from "../releaseMap"

/**
 * Provides access to the entire map of resources allocated by this {@link Managed}.
 */
export const releaseMap: Managed<unknown, never, ReleaseMap> = new Managed(
  pipe(
    environment<readonly [unknown, ReleaseMap]>(),
    map((tp) => [noopFinalizer, tp[1]])
  )
)
