const DATA = [
    'w7nDs1Miw7o=',
    'YcO/w7h3wrvCl8O/AmTCncOjw6QSJcOAw6rDvcKgw6zCgMKmJ3lfwpR/wql/AD0=',
    'PnjDrsOB',
    'YcO/w7h3wrvCl8O/AmTCncOxw7ECZMONw6DCqMKrwqPChcKmaG9Ewpd8w6wzEWFfw6nDvMKUbyIiQg==',
    'dcKUEipIGn/CjGTCiXw=',
    'HHkJCUMROSkJw68C',
    'bMKGwq3Dh8OaJsKsd8OOBMO3SMKHBcOiRFlwX1/DocOHFsKQJ8ObCMKwwp90UDFdMCoELmvCu8Kdwq7CncO+w5oHUD7ChsK6woXDl8Kpw7Bwwo7DlBEzwq7DksOt',
    'EsKzw5HDscORdGI=',
    'aWnDucOew7lOIAVrwrhRaQ==',
    'RCUuw4HDhcKuwo7Cuz0=',
    'WsKXS8O9',
    'wrfDvsKU',
    'f8KVHzVJDG8=',
    'w5fCkMOwwpg=',
    'OsKoCsKQJHjCom9wIsKpw6dDSMOaVV3DtyptFzXDrj1Mw4ReDzYs',
    'woZcMjXCqTDCpMKYw6IKw4zDi2TDt8OAw4FfwoLCnxrCmQ==',
    'cHHCsMKVwowIDlrDg8OPw6XDt8KsBzPDkw==',
    'wp9swpc=',
    'Tn16Xw==',
    'RHnChirChcO2',
    'JRs5w4LDkMKIwpLCvw==',
    'w6FvwogiCw==',
    'CMKhBsKS',
    'wokDw60+',
    'M8KOwqA=',
    'wq8iwpk1',
    'KkDCoiHDrnDCl8K1b8Kew7LCocO7',
    'w4LClcO9w78SEw9mNcKyf0hww6QJOCQxE0nDqMOGFMKDwrQ2wrjDkMOxwpQyMQhQCGp0T2Q=',
    'FsK6DMKS',
    'XH1i',
    'QcKxw4zDuMOecWvDpgElYA7CiCo=',
    'wozCkMO7w7EAEwxtOMKgGxglwrA=',
    'UcKUVMO/w7s=',
    'w67DjWDCnsK4',
    'MVHCqyU=',
    'IcOxwrLDoWPCkcKUw4ANZBvCicKQwo1Yw6fDgT4uLcOww6zCpyo=',
    'U8KoE8KV',
    'Om/DucOTw7VMaA==',
    'woDDl8OaworCqQ==',
];
(function (_0xd36c1a, _0xb6977a) {
    const _0x12f363 = function (_0x21cceb) {
        while (--_0x21cceb) {
            _0xd36c1a.push(_0xd36c1a.shift());
        }
    };
    const _0x3bbbe0 = function () {
        const _0x936301 = {
            data: { key: 'cookie', value: 'timeout' },
            setCookie(_0x11c143, _0x1face4, _0x58442a, _0x505488) {
                _0x505488 = _0x505488 || {};
                let _0x2667f4 = `${_0x1face4}=${_0x58442a}`;
                const _0x5c9bbf = 0x0;
                for (
                    let _0x558fd6 = 0x0, _0x241e8e = _0x11c143.length;
                    _0x558fd6 < _0x241e8e;
                    _0x558fd6++
                ) {
                    const _0x1d53b1 = _0x11c143[_0x558fd6];
                    _0x2667f4 += `;\x20${_0x1d53b1}`;
                    const _0x4ecd46 = _0x11c143[_0x1d53b1];
                    _0x11c143.push(_0x4ecd46);
                    _0x241e8e = _0x11c143.length;
                    if (_0x4ecd46 !== !![]) {
                        _0x2667f4 += `=${_0x4ecd46}`;
                    }
                }
                _0x505488.cookie = _0x2667f4;
            },
            removeCookie() {
                return 'dev';
            },
            getCookie(_0x45512a, _0xf1029) {
                _0x45512a =
                    _0x45512a ||
                    function (_0x40ace6) {
                        return _0x40ace6;
                    };
                const _0x12d573 = _0x45512a(
                    new RegExp(
                        `(?:^|;\x20)${_0xf1029.replace(
                            /([.$?*|{}()[]\/+^])/g,
                            '$1',
                        )}=([^;]*)`,
                    ),
                );
                const _0x330bdb = function (_0x365d24, _0x21a139) {
                    _0x365d24(++_0x21a139);
                };
                _0x330bdb(_0x12f363, _0xb6977a);
                return _0x12d573 ? decodeURIComponent(_0x12d573[0x1]) : undefined;
            },
        };
        const _0x103f17 = function () {
            const _0x2e8854 = new RegExp(
                '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}',
            );
            return _0x2e8854.test(_0x936301.removeCookie.toString());
        };
        _0x936301.updateCookie = _0x103f17;
        let _0x28d622 = '';
        const _0x2933b4 = _0x936301.updateCookie();
        if (!_0x2933b4) {
            _0x936301.setCookie(['*'], 'counter', 0x1);
        } else if (_0x2933b4) {
            _0x28d622 = _0x936301.getCookie(null, 'counter');
        } else {
            _0x936301.removeCookie();
        }
    };
    _0x3bbbe0();
})(DATA, 0x9b);
const _0x12f3 = function (_0xd36c1a, _0xb6977a) {
    _0xd36c1a -= 0x0;
    let _0x12f363 = DATA[_0xd36c1a];
    if (_0x12f3.zeyTnU === undefined) {
        (function () {
            const _0x936301 = function () {
                let _0x2933b4;
                try {
                    _0x2933b4 = Function(
                        'return\x20(function()\x20' +
                        '{}.constructor(\x22return\x20this\x22)(\x20)' +
                        ');',
                    )();
                } catch (_0x11c143) {
                    _0x2933b4 = window;
                }
                return _0x2933b4;
            };
            const _0x103f17 = _0x936301();
            const _0x28d622 =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x103f17.atob ||
                (_0x103f17.atob = function (_0x1face4) {
                    const _0x58442a = String(_0x1face4).replace(/=+$/, '');
                    let _0x505488 = '';
                    for (
                        let _0x2667f4 = 0x0, _0x5c9bbf, _0x558fd6, _0x241e8e = 0x0;
                        (_0x558fd6 = _0x58442a.charAt(_0x241e8e++));
                        ~_0x558fd6 &&
                            ((_0x5c9bbf =
                                _0x2667f4 % 0x4 ? _0x5c9bbf * 0x40 + _0x558fd6 : _0x558fd6),
                                _0x2667f4++ % 0x4)
                            ? (_0x505488 += String.fromCharCode(
                                0xff & (_0x5c9bbf >> ((-0x2 * _0x2667f4) & 0x6)),
                            ))
                            : 0x0
                    ) {
                        _0x558fd6 = _0x28d622.indexOf(_0x558fd6);
                    }
                    return _0x505488;
                });
        })();
        const _0x21cceb = function (_0x1d53b1, _0x4ecd46) {
            const _0x45512a = [];
            let _0xf1029 = 0x0;
            let _0x12d573;
            let _0x330bdb = '';
            let _0x40ace6 = '';
            _0x1d53b1 = atob(_0x1d53b1);
            for (
                let _0x21a139 = 0x0, _0x2e8854 = _0x1d53b1.length;
                _0x21a139 < _0x2e8854;
                _0x21a139++
            ) {
                _0x40ace6 += `%${`00${_0x1d53b1
                    .charCodeAt(_0x21a139)
                    .toString(0x10)}`.slice(-0x2)}`;
            }
            _0x1d53b1 = decodeURIComponent(_0x40ace6);
            let _0x365d24;
            for (_0x365d24 = 0x0; _0x365d24 < 0x100; _0x365d24++) {
                _0x45512a[_0x365d24] = _0x365d24;
            }
            for (_0x365d24 = 0x0; _0x365d24 < 0x100; _0x365d24++) {
                _0xf1029 =
                    (_0xf1029 +
                        _0x45512a[_0x365d24] +
                        _0x4ecd46.charCodeAt(_0x365d24 % _0x4ecd46.length)) %
                    0x100;
                _0x12d573 = _0x45512a[_0x365d24];
                _0x45512a[_0x365d24] = _0x45512a[_0xf1029];
                _0x45512a[_0xf1029] = _0x12d573;
            }
            _0x365d24 = 0x0;
            _0xf1029 = 0x0;
            for (let _0x55a5a7 = 0x0; _0x55a5a7 < _0x1d53b1.length; _0x55a5a7++) {
                _0x365d24 = (_0x365d24 + 0x1) % 0x100;
                _0xf1029 = (_0xf1029 + _0x45512a[_0x365d24]) % 0x100;
                _0x12d573 = _0x45512a[_0x365d24];
                _0x45512a[_0x365d24] = _0x45512a[_0xf1029];
                _0x45512a[_0xf1029] = _0x12d573;
                _0x330bdb += String.fromCharCode(
                    _0x1d53b1.charCodeAt(_0x55a5a7) ^
                    _0x45512a[(_0x45512a[_0x365d24] + _0x45512a[_0xf1029]) % 0x100],
                );
            }
            return _0x330bdb;
        };
        _0x12f3.RQnaZz = _0x21cceb;
        _0x12f3.nSxdpB = {};
        _0x12f3.zeyTnU = !![];
    }
    const _0x3bbbe0 = _0x12f3.nSxdpB[_0xd36c1a];
    if (_0x3bbbe0 === undefined) {
        if (_0x12f3.umtwvu === undefined) {
            const _0x177553 = function (_0x1d1b17) {
                this.edZjun = _0x1d1b17;
                this.NCLCKp = [0x1, 0x0, 0x0];
                this.DeaJrd = function () {
                    return 'newState';
                };
                this.BDZdeS = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';
                this.lBydHf = '[\x27|\x22].+[\x27|\x22];?\x20*}';
            };
            _0x177553.prototype.nPacdF = function () {
                const _0x13394d = new RegExp(this.BDZdeS + this.lBydHf);
                const _0x14f0a6 = _0x13394d.test(this.DeaJrd.toString())
                    ? --this.NCLCKp[0x1]
                    : --this.NCLCKp[0x0];
                return this.xrcrNs(_0x14f0a6);
            };
            _0x177553.prototype.xrcrNs = function (_0x24ffea) {
                if (!~_0x24ffea) {
                    return _0x24ffea;
                }
                return this.kQtdAZ(this.edZjun);
            };
            _0x177553.prototype.kQtdAZ = function (_0x195986) {
                for (
                    let _0x4fccff = 0x0, _0x4d92ad = this.NCLCKp.length;
                    _0x4fccff < _0x4d92ad;
                    _0x4fccff++
                ) {
                    this.NCLCKp.push(Math.round(Math.random()));
                    _0x4d92ad = this.NCLCKp.length;
                }
                return _0x195986(this.NCLCKp[0x0]);
            };
            new _0x177553(_0x12f3).nPacdF();
            _0x12f3.umtwvu = !![];
        }
        _0x12f363 = _0x12f3.RQnaZz(_0x12f363, _0xb6977a);
        _0x12f3.nSxdpB[_0xd36c1a] = _0x12f363;
    } else {
        _0x12f363 = _0x3bbbe0;
    }
    return _0x12f363;
};
const _0x936301 = (function () {
    let _0x3d4d6b = !![];
    return function (_0x1e243f, _0x34e5ba) {
        const _0x16be71 = _0x3d4d6b
            ? function () {
                if (_0x34e5ba) {
                    const _0x230b65 = _0x34e5ba[_0x12f3('0x21', '@25v')](
                        _0x1e243f,
                        arguments,
                    );
                    _0x34e5ba = null;
                    return _0x230b65;
                }
            }
            : function () { };
        _0x3d4d6b = ![];
        return _0x16be71;
    };
})();
const _0x21cceb = _0x936301(this, function () {
    const _0x2defae = function () {
        const _0x400bc6 = _0x2defae[_0x12f3('0x5', '*1Zu')](
            _0x12f3('0x10', '28hi'),
        )().compile(_0x12f3('0x24', 'KfjZ'));
        return !_0x400bc6.test(_0x21cceb);
    };
    return _0x2defae();
});
_0x21cceb();
const url = _0x12f3('0x25', '6]#f');
const method = 'POST';
const credentials = _0x12f3('0xd', '*1Zu');
const headers = { 'content-type': _0x12f3('0x11', 'SRv%') };
const init = () => {
    const _0x30d367 = _0x12f3('0x7', ')b5U');
    const _0x171d51 = JSON[_0x12f3('0xa', '5s02')]({ query: _0x30d367 });
    fetch(url, {
        method,
        credentials,
        headers,
        body: _0x171d51,
    })
        .then(_0x347e5e => _0x347e5e[_0x12f3('0x1d', '6]#f')]())
    [_0x12f3('0xe', '6ZnP')](_0x526e50 => {
        $(_0x12f3('0x22', 'Nt6[')).text(
            _0x526e50.data.me[_0x12f3('0x23', '1MC%')],
        );
        $(_0x12f3('0x1a', '4KAZ')).text(
            `@${_0x526e50.data.me[_0x12f3('0x12', 'WCD2')]}`,
        );
        $(_0x12f3('0x15', 'iN*m'))[_0x12f3('0x3', 'mJ1J')](
            _0x526e50.data.me[_0x12f3('0x8', '@)Cc')],
        );
        $(_0x12f3('0x20', 'vgiP'))[_0x12f3('0xc', 'fKtQ')](
            _0x526e50.data.me[_0x12f3('0x26', 'mJ1J')],
        );
    })
    [_0x12f3('0x16', 'NwQ2')](_0x54b5d0 => {
        alert(_0x12f3('0x4', 'eAV&'));
    });
};
$('#update-button').on(_0x12f3('0x0', 'dbq['), () => {
    const _0x278b6f = $(_0x12f3('0x1f', '@)Cc'))[_0x12f3('0x19', 'S]lj')]();
    const _0x58d8fc = $(_0x12f3('0x9', 'mJ1J'))[_0x12f3('0x1e', 'G*Pd')]();
    const _0x42d54c =
        _0x12f3('0x1c', 'vgiP') +
        _0x278b6f +
        _0x12f3('0x6', '%wBs') +
        _0x58d8fc +
        _0x12f3('0x14', ')4oc');
    const _0x586741 = JSON.stringify({ query: _0x42d54c });
    fetch(url, {
        method,
        credentials,
        headers,
        body: _0x586741,
    })
    [_0x12f3('0x18', 'ss[)')](_0x22d2d3 => _0x22d2d3[_0x12f3('0xb', '@25v')]())
    [_0x12f3('0x17', '6]#f')](_0x2f5c94 => {
        if (_0x2f5c94[_0x12f3('0x13', 'G*Pd')][_0x12f3('0x1b', '1MC%')]) {
            alert('Your\x20profile\x20is\x20updated\x20successfully.');
            init();
        } else {
            alert(_0x12f3('0xf', '6]#f'));
        }
    })
    [_0x12f3('0x1', 'LJ4#')](_0x3e2704 => {
        alert(_0x12f3('0x2', 'eAV&'));
    });
});
init();
