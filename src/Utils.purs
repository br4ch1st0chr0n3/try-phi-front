module Utils(class_, attr_, getHTML, someText, classes_, getNewCode) where

import Prelude

import Halogen (AttrName(..))
import Halogen.HTML (HTML) as HH
import Halogen.HTML.Properties as HP
import Phi (Editor(..))
import Web.Event.CustomEvent (CustomEvent)
import Web.HTML.Common (ClassName(..))


class_ n = HP.class_ $ ClassName n
attr_ k v = HP.attr (AttrName k) v

classes_ n = HP.classes $ ClassName <$> n


foreign import getHTML :: forall a b. HH.HTML a b -> String

foreign import someText :: Unit -> String

foreign import data EditorEvent :: Type

foreign import getNewCode :: EditorEvent -> (forall x. x -> Maybe x) -> (forall x. Maybe x) -> Maybe String

-- | takes event
-- if it refers to phi editor, returns the first option
-- if to eo editor returns the second option
-- else nothing
foreign import getTab :: EditorEvent -> Editor -> Editor -> (forall x. x -> Maybe x) -> (forall x. Maybe x) -> Maybe Editor

-- TODO add custom type for customeventlistener
-- add functions to decompose it into 