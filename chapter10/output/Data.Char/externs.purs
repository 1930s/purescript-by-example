-- Generated by psc-make version 0.6.9.3
module Data.Char where
import Prelude ()
import Prim ()
import Prelude ()
-- | A unicode character.
--  | Characters can be compared for equality with `==` and `/=`.
--  | Characters can be compared with `compare`, `>`, `>=`, `<` and `<=`.
--  | Characters can be rendered as a string with `show`.
--  | Returns the numeric Unicode value of the character.
--  | Constructs a character from the given Unicode numeric value.
--  | Characters can be rendered as a string with `show`.
--  | Characters can be compared for equality with `==` and `/=`.
--  | Characters can be compared with `compare`, `>`, `>=`, `<` and `<=`.
--  | Returns the string of length `1` containing only the given character.
data Char
foreign import toCharCode :: Data.Char.Char -> Prim.Number
foreign import fromCharCode :: Prim.Number -> Data.Char.Char
foreign import charString :: Data.Char.Char -> Prim.String
foreign import instance eqChar :: Prelude.Eq Data.Char.Char
foreign import instance ordChar :: Prelude.Ord Data.Char.Char
foreign import instance showChar :: Prelude.Show Data.Char.Char
