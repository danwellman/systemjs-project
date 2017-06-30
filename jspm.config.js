SystemJS.config({
    sassPluginOptions: {
        "autoprefixer": {
            "browsers": [
                "last 10 versions"
            ]
        }
    },
    meta: {
        "*.scss": {
            "loader": "sass"
        },
        "*.css": {
            "loader": "css"
        }
    },
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/",
      "systemjs-project/": "/src/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/",
      "systemjs-project/": "src/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.23",
      "sass": "github:dougludlow/plugin-sass@0.6.0",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "events": "npm:jspm-nodelibs-events@0.2.2",
      "assert": "npm:jspm-nodelibs-assert@0.2.1",
      "process": "npm:jspm-nodelibs-process@0.2.1",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
      "fs": "npm:jspm-nodelibs-fs@0.2.1",
      "util": "npm:jspm-nodelibs-util@0.2.2",
      "http": "npm:jspm-nodelibs-http@0.2.0",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
      "os": "npm:jspm-nodelibs-os@0.2.2",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
      "stream": "npm:jspm-nodelibs-stream@0.2.1",
      "url": "npm:jspm-nodelibs-url@0.2.1",
      "path": "npm:jspm-nodelibs-path@0.2.3",
      "vm": "npm:jspm-nodelibs-vm@0.2.1",
      "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
      "constants": "npm:jspm-nodelibs-constants@0.2.1",
      "https": "npm:jspm-nodelibs-https@0.2.2",
      "css": "github:systemjs/plugin-css@0.1.35"
    },
    "packages": {
      "github:dougludlow/plugin-sass@0.6.0": {
        "map": {
          "postcss": "npm:postcss@5.2.17",
          "autoprefixer": "npm:autoprefixer@6.7.7",
          "sass.js": "npm:sass.js@0.9.13",
          "css-url-rewriter-ex": "npm:css-url-rewriter-ex@1.0.6",
          "css-asset-copier": "npm:css-asset-copier@1.0.2",
          "reqwest": "github:ded/reqwest@2.0.5"
        }
      },
      "npm:autoprefixer@6.7.7": {
        "map": {
          "postcss": "npm:postcss@5.2.17",
          "browserslist": "npm:browserslist@1.7.7",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "num2fraction": "npm:num2fraction@1.2.2",
          "normalize-range": "npm:normalize-range@0.1.2",
          "caniuse-db": "npm:caniuse-db@1.0.30000686"
        }
      },
      "npm:postcss@5.2.17": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "source-map": "npm:source-map@0.5.6",
          "supports-color": "npm:supports-color@3.2.3",
          "js-base64": "npm:js-base64@2.1.9"
        }
      },
      "npm:jspm-nodelibs-buffer@0.2.3": {
        "map": {
          "buffer": "npm:buffer@5.0.6"
        }
      },
      "npm:jspm-nodelibs-os@0.2.2": {
        "map": {
          "os-browserify": "npm:os-browserify@0.3.0"
        }
      },
      "npm:jspm-nodelibs-http@0.2.0": {
        "map": {
          "http-browserify": "npm:stream-http@2.7.2"
        }
      },
      "npm:jspm-nodelibs-crypto@0.2.1": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:jspm-nodelibs-string_decoder@0.2.1": {
        "map": {
          "string_decoder": "npm:string_decoder@0.10.31"
        }
      },
      "npm:jspm-nodelibs-stream@0.2.1": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:jspm-nodelibs-url@0.2.1": {
        "map": {
          "url": "npm:url@0.11.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "supports-color": "npm:supports-color@2.0.0",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0"
        }
      },
      "npm:browserslist@1.7.7": {
        "map": {
          "caniuse-db": "npm:caniuse-db@1.0.30000686",
          "electron-to-chromium": "npm:electron-to-chromium@1.3.14"
        }
      },
      "npm:supports-color@3.2.3": {
        "map": {
          "has-flag": "npm:has-flag@1.0.0"
        }
      },
      "npm:css-url-rewriter-ex@1.0.6": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0"
        }
      },
      "npm:css-asset-copier@1.0.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "fs-extra": "npm:fs-extra@0.30.0"
        }
      },
      "npm:buffer@5.0.6": {
        "map": {
          "base64-js": "npm:base64-js@1.2.0",
          "ieee754": "npm:ieee754@1.1.8"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "pbkdf2": "npm:pbkdf2@3.0.12",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "inherits": "npm:inherits@2.0.3",
          "randombytes": "npm:randombytes@2.0.5",
          "browserify-sign": "npm:browserify-sign@4.0.4",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "create-hmac": "npm:create-hmac@1.1.6",
          "create-hash": "npm:create-hash@1.1.3",
          "browserify-cipher": "npm:browserify-cipher@1.0.0"
        }
      },
      "npm:stream-http@2.7.2": {
        "map": {
          "xtend": "npm:xtend@4.0.1",
          "inherits": "npm:inherits@2.0.3",
          "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
          "readable-stream": "npm:readable-stream@2.2.11",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.2.11"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      },
      "npm:fs-extra@0.30.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.11",
          "rimraf": "npm:rimraf@2.6.1",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "klaw": "npm:klaw@1.3.1",
          "jsonfile": "npm:jsonfile@2.4.0"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "randombytes": "npm:randombytes@2.0.5",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.1.0",
          "create-hash": "npm:create-hash@1.1.3",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.5",
          "miller-rabin": "npm:miller-rabin@4.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:readable-stream@2.2.11": {
        "map": {
          "string_decoder": "npm:string_decoder@1.0.2",
          "inherits": "npm:inherits@2.0.3",
          "isarray": "npm:isarray@1.0.0",
          "core-util-is": "npm:core-util-is@1.0.2",
          "safe-buffer": "npm:safe-buffer@5.0.1",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "process-nextick-args": "npm:process-nextick-args@1.0.7"
        }
      },
      "npm:babel-runtime@6.23.0": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:randombytes@2.0.5": {
        "map": {
          "safe-buffer": "npm:safe-buffer@5.1.0"
        }
      },
      "npm:pbkdf2@3.0.12": {
        "map": {
          "safe-buffer": "npm:safe-buffer@5.1.0",
          "ripemd160": "npm:ripemd160@2.0.1",
          "sha.js": "npm:sha.js@2.4.8",
          "create-hmac": "npm:create-hmac@1.1.6",
          "create-hash": "npm:create-hash@1.1.3"
        }
      },
      "npm:string_decoder@1.0.2": {
        "map": {
          "safe-buffer": "npm:safe-buffer@5.0.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.1.0"
        }
      },
      "npm:ripemd160@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "hash-base": "npm:hash-base@2.0.2"
        }
      },
      "npm:sha.js@2.4.8": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "randombytes": "npm:randombytes@2.0.5",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:parse-asn1@5.1.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "pbkdf2": "npm:pbkdf2@3.0.12",
          "asn1.js": "npm:asn1.js@4.9.1",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:create-hmac@1.1.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "inherits": "npm:inherits@2.0.3",
          "ripemd160": "npm:ripemd160@2.0.1",
          "sha.js": "npm:sha.js@2.4.8",
          "safe-buffer": "npm:safe-buffer@5.1.0",
          "cipher-base": "npm:cipher-base@1.0.3"
        }
      },
      "npm:create-hash@1.1.3": {
        "map": {
          "ripemd160": "npm:ripemd160@2.0.1",
          "inherits": "npm:inherits@2.0.3",
          "sha.js": "npm:sha.js@2.4.8",
          "cipher-base": "npm:cipher-base@1.0.3"
        }
      },
      "npm:browserify-sign@4.0.4": {
        "map": {
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "create-hash": "npm:create-hash@1.1.3",
          "inherits": "npm:inherits@2.0.3",
          "create-hmac": "npm:create-hmac@1.1.6",
          "parse-asn1": "npm:parse-asn1@5.1.0",
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.4.0"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.4.0"
        }
      },
      "npm:rimraf@2.6.1": {
        "map": {
          "glob": "npm:glob@7.1.2"
        }
      },
      "npm:glob@7.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "fs.realpath": "npm:fs.realpath@1.0.0",
          "once": "npm:once@1.4.0",
          "inflight": "npm:inflight@1.0.6",
          "minimatch": "npm:minimatch@3.0.4"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:elliptic@6.4.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.1.0",
          "inherits": "npm:inherits@2.0.3",
          "hash.js": "npm:hash.js@1.0.3",
          "hmac-drbg": "npm:hmac-drbg@1.0.1",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
        }
      },
      "npm:hash-base@2.0.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:asn1.js@4.9.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.3"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:inflight@1.0.6": {
        "map": {
          "once": "npm:once@1.4.0",
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:hmac-drbg@1.0.1": {
        "map": {
          "hash.js": "npm:hash.js@1.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:once@1.4.0": {
        "map": {
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:minimatch@3.0.4": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.8"
        }
      },
      "npm:brace-expansion@1.1.8": {
        "map": {
          "balanced-match": "npm:balanced-match@1.0.0",
          "concat-map": "npm:concat-map@0.0.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "systemjs-project": {
      "main": "systemjs-project.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "claviska/jquery-minicolors": "github:claviska/jquery-minicolors@2.2.6",
    "jquery": "npm:jquery@3.2.1",
    "minicolors.css": "jspm_packages/github/claviska/jquery-minicolors@2.2.6/jquery.minicolors.css"
  },
  packages: {}
});
