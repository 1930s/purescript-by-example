// Generated by psc-make version 0.6.9.3

/**
 *  | A data type and functions for working with ordered pairs and sequences of values.
 */
"use strict";
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Control_Lazy = require("Control.Lazy");
var Data_Array = require("Data.Array");
var Control_Comonad = require("Control.Comonad");
var Control_Extend = require("Control.Extend");

/**
 *  | A simple product type for wrapping a pair of component values.
 */
var Tuple = (function () {
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    return Tuple;
})();

/**
 *  | Rakes two lists and returns a list of corresponding pairs.
 *  | If one input list is short, excess elements of the longer list are discarded.
 */
var zip = Data_Array.zipWith(Tuple.create);

/**
 *  | Transforms a list of pairs into a list of first components and a list of
 *  | second components.
 */
var unzip = function (_121) {
    if (_121.length >= 1) {
        var _482 = _121.slice(1);
        var _476 = unzip(_482);
        return new Tuple(Prelude[":"]((_121[0]).value0)(_476.value0), Prelude[":"]((_121[0]).value1)(_476.value1));
    };
    if (_121.length === 0) {
        return new Tuple([  ], [  ]);
    };
    throw new Error("Failed pattern match");
};

/**
 *  | Turn a function of two arguments into a function that expects a tuple.
 */
var uncurry = function (f) {
    return function (_120) {
        return f(_120.value0)(_120.value1);
    };
};

/**
 *  | Exchange the first and second components of a tuple.
 */
var swap = function (_122) {
    return new Tuple(_122.value1, _122.value0);
};

/**
 *  | Returns the second component of a tuple.
 */
var snd = function (_119) {
    return _119.value1;
};

/**
 *  | Allows `Tuple`s to be rendered as a string with `show` whenever there are
 *  | `Show` instances for both component types.
 */
var showTuple = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return new Prelude.Show(function (_123) {
            return "Tuple (" + (Prelude.show(__dict_Show_0)(_123.value0) + (") (" + (Prelude.show(__dict_Show_1)(_123.value1) + ")")));
        });
    };
};
var semigroupoidTuple = new Prelude.Semigroupoid(function (_128) {
    return function (_129) {
        return new Tuple(_129.value0, _128.value1);
    };
});

/**
 *  | The `Semigroup` instance enables use of the associative operator `<>` on
 *  | `Tuple`s whenever there are `Semigroup` instances for the component
 *  | types. The `<>` operator is applied pairwise, so:
 *  | ```purescript
 *  | (Tuple a1 b1) <> (Tuple a2 b2) = Tuple (a1 <> a2) (b1 <> b2)
 *  | ```
 */
var semigroupTuple = function (__dict_Semigroup_2) {
    return function (__dict_Semigroup_3) {
        return new Prelude.Semigroup(function (_130) {
            return function (_131) {
                return new Tuple(Prelude["<>"](__dict_Semigroup_2)(_130.value0)(_131.value0), Prelude["<>"](__dict_Semigroup_3)(_130.value1)(_131.value1));
            };
        });
    };
};
var monoidTuple = function (__dict_Monoid_6) {
    return function (__dict_Monoid_7) {
        return new Data_Monoid.Monoid(function () {
            return semigroupTuple(__dict_Monoid_6["__superclass_Prelude.Semigroup_0"]())(__dict_Monoid_7["__superclass_Prelude.Semigroup_0"]());
        }, new Tuple(Data_Monoid.mempty(__dict_Monoid_6), Data_Monoid.mempty(__dict_Monoid_7)));
    };
};

/**
 *  | The `Functor` instance allows functions to transform the contents of a
 *  | `Tuple` with the `<$>` operator, applying the function to the second
 *  | component, so:
 *  | ```purescript
 *  | f <$> (Tuple x y) = Tuple x (f y)
 *  | ````
 */
var functorTuple = new Prelude.Functor(function (f) {
    return function (_132) {
        return new Tuple(_132.value0, f(_132.value1));
    };
});

/**
 *  | Returns the first component of a tuple.
 */
var fst = function (_118) {
    return _118.value0;
};
var lazyLazy1Tuple = function (__dict_Lazy1_9) {
    return function (__dict_Lazy1_10) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer1(__dict_Lazy1_9)(function (_114) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer1(__dict_Lazy1_10)(function (_115) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var lazyLazy2Tuple = function (__dict_Lazy2_11) {
    return function (__dict_Lazy2_12) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer2(__dict_Lazy2_11)(function (_116) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer2(__dict_Lazy2_12)(function (_117) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var lazyTuple = function (__dict_Lazy_13) {
    return function (__dict_Lazy_14) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer(__dict_Lazy_13)(function (_112) {
                return fst(f(Prelude.unit));
            }), Control_Lazy.defer(__dict_Lazy_14)(function (_113) {
                return snd(f(Prelude.unit));
            }));
        });
    };
};
var extendTuple = new Control_Extend.Extend(function (f) {
    return function (_136) {
        return new Tuple(_136.value0, f(_136));
    };
}, function () {
    return functorTuple;
});

/**
 *  | Allows `Tuple`s to be checked for equality with `==` and `/=` whenever
 *  | there are `Eq` instances for both component types.
 */
var eqTuple = function (__dict_Eq_15) {
    return function (__dict_Eq_16) {
        return new Prelude.Eq(function (t1) {
            return function (t2) {
                return !Prelude["=="](eqTuple(__dict_Eq_15)(__dict_Eq_16))(t1)(t2);
            };
        }, function (_124) {
            return function (_125) {
                return Prelude["=="](__dict_Eq_15)(_124.value0)(_125.value0) && Prelude["=="](__dict_Eq_16)(_124.value1)(_125.value1);
            };
        });
    };
};

/**
 *  | Allows `Tuple`s to be compared with `compare`, `>`, `>=`, `<` and `<=`
 *  | whenever there are `Ord` instances for both component types. To obtain
 *  | the result, the `fst`s are `compare`d, and if they are `EQ`ual, the
 *  | `snd`s are `compare`d.
 */
var ordTuple = function (__dict_Ord_4) {
    return function (__dict_Ord_5) {
        return new Prelude.Ord(function () {
            return eqTuple(__dict_Ord_4["__superclass_Prelude.Eq_0"]())(__dict_Ord_5["__superclass_Prelude.Eq_0"]());
        }, function (_126) {
            return function (_127) {
                var _533 = Prelude.compare(__dict_Ord_4)(_126.value0)(_127.value0);
                if (_533 instanceof Prelude.EQ) {
                    return Prelude.compare(__dict_Ord_5)(_126.value1)(_127.value1);
                };
                return _533;
            };
        });
    };
};

/**
 *  | Turn a function that expects a tuple into a function of two arguments.
 */
var curry = function (f) {
    return function (a) {
        return function (b) {
            return f(new Tuple(a, b));
        };
    };
};
var comonadTuple = new Control_Comonad.Comonad(function () {
    return extendTuple;
}, snd);

/**
 *  | The `Functor` instance allows functions to transform the contents of a
 *  | `Tuple` with the `<*>` operator whenever there is a `Semigroup` instance
 *  | for the `fst` component, so:
 *  | ```purescript
 *  | (Tuple a1 f) <*> (Tuple a2 x) == Tuple (a1 <> a2) (f x)
 *  | ```
 */
var applyTuple = function (__dict_Semigroup_18) {
    return new Prelude.Apply(function (_133) {
        return function (_134) {
            return new Tuple(Prelude["<>"](__dict_Semigroup_18)(_133.value0)(_134.value0), _133.value1(_134.value1));
        };
    }, function () {
        return functorTuple;
    });
};
var bindTuple = function (__dict_Semigroup_17) {
    return new Prelude.Bind(function (_135) {
        return function (f) {
            var _546 = f(_135.value1);
            return new Tuple(Prelude["<>"](__dict_Semigroup_17)(_135.value0)(_546.value0), _546.value1);
        };
    }, function () {
        return applyTuple(__dict_Semigroup_17);
    });
};
var applicativeTuple = function (__dict_Monoid_19) {
    return new Prelude.Applicative(function () {
        return applyTuple(__dict_Monoid_19["__superclass_Prelude.Semigroup_0"]());
    }, Tuple.create(Data_Monoid.mempty(__dict_Monoid_19)));
};
var monadTuple = function (__dict_Monoid_8) {
    return new Prelude.Monad(function () {
        return applicativeTuple(__dict_Monoid_8);
    }, function () {
        return bindTuple(__dict_Monoid_8["__superclass_Prelude.Semigroup_0"]());
    });
};
module.exports = {
    Tuple: Tuple, 
    swap: swap, 
    unzip: unzip, 
    zip: zip, 
    uncurry: uncurry, 
    curry: curry, 
    snd: snd, 
    fst: fst, 
    showTuple: showTuple, 
    eqTuple: eqTuple, 
    ordTuple: ordTuple, 
    semigroupoidTuple: semigroupoidTuple, 
    semigroupTuple: semigroupTuple, 
    monoidTuple: monoidTuple, 
    functorTuple: functorTuple, 
    applyTuple: applyTuple, 
    applicativeTuple: applicativeTuple, 
    bindTuple: bindTuple, 
    monadTuple: monadTuple, 
    extendTuple: extendTuple, 
    comonadTuple: comonadTuple, 
    lazyTuple: lazyTuple, 
    lazyLazy1Tuple: lazyLazy1Tuple, 
    lazyLazy2Tuple: lazyLazy2Tuple
};
