-- Generated by psc-make version 0.6.9.3
module Control.Monad.Eff.Confirm where
import Prim ()
import Prelude ()
import Control.Monad.Eff ()
foreign import data Confirm :: !
foreign import confirm :: forall eff. Prim.String -> Control.Monad.Eff.Eff (confirm :: Control.Monad.Eff.Confirm.Confirm | eff) Prim.Boolean
