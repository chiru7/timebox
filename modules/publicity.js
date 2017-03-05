'use strict';

const Publicity = (function() {
  const InnerType = function(id, val, toStringValue) {
    this.id = id;
    this.val = val;
    this.toString = function() {
      return toStringValue;
    };
  };

  const DEF_PRIVATE = new InnerType('PRIVATE', 0, 'private');
  const DEF_PROTECTED = new InnerType('PROTECTED', 1, 'protected');
  const DEF_PUBLIC = new InnerType('PUBLIC', 2, 'public');
  const DEF_UNDEFINED = new InnerType('UNDEFINED', -1, 'undefined');
  const DEF_LEVEL = {
    PRIVATE: DEF_PRIVATE,
    PROTECTED: DEF_PROTECTED,
    PUBLIC: DEF_PUBLIC,
    UNDEFINED: DEF_UNDEFINED
  };

  return {
    LEVEL: DEF_LEVEL,
    codeOf: function(id) {
      for (let type in DEF_LEVEL) {
        if (DEF_LEVEL[type].id === id) {
          return DEF_LEVEL[type];
        }
      }
      return DEF_UNDEFINED;
    },
    valueOf: function(val) {
      for (let type in DEF_LEVEL) {
        if (DEF_LEVEL[type].val === val) {
          return DEF_LEVEL[type];
        }
      }
      return DEF_UNDEFINED;
    }
  };
})();

module.exports = Publicity;
