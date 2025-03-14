/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/presale_contract.json`.
 */
export type PresaleContract_Type = {
    "address": "Gis8LkraTr9SZjcvU3xCwaSnhbmxAbvGMAqw7CYy7p4Y",
    "metadata": {
        "name": "presaleContract",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Created with Anchor"
    },
    "instructions": [
        {
            "name": "addReferer",
            "discriminator": [
                82,
                106,
                255,
                81,
                226,
                80,
                114,
                64
            ],
            "accounts": [
                {
                    "name": "userInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    85,
                                    83,
                                    69,
                                    82,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "buyer"
                            }
                        ]
                    }
                },
                {
                    "name": "referer"
                },
                {
                    "name": "buyer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": []
        },
        {
            "name": "buyTokenWithSol",
            "discriminator": [
                158,
                168,
                23,
                217,
                217,
                106,
                94,
                73
            ],
            "accounts": [
                {
                    "name": "presaleInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "presaleAuthority"
                },
                {
                    "name": "userInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    85,
                                    83,
                                    69,
                                    82,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "buyer"
                            }
                        ]
                    }
                },
                {
                    "name": "presaleVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    86,
                                    65,
                                    85,
                                    76,
                                    84
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "refererA",
                    "writable": true
                },
                {
                    "name": "refererB",
                    "writable": true
                },
                {
                    "name": "refererC",
                    "writable": true
                },
                {
                    "name": "buyer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                }
            ],
            "args": [
                {
                    "name": "tokenAmount",
                    "type": "u64"
                },
                {
                    "name": "quoteAmount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "buyTokenWithToken",
            "discriminator": [
                209,
                45,
                111,
                127,
                196,
                149,
                126,
                159
            ],
            "accounts": [
                {
                    "name": "presaleInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "priceUpdate"
                },
                {
                    "name": "usdToken"
                },
                {
                    "name": "presaleAuthority"
                },
                {
                    "name": "userInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    85,
                                    83,
                                    69,
                                    82,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "buyer"
                            }
                        ]
                    }
                },
                {
                    "name": "presaleVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    86,
                                    65,
                                    85,
                                    76,
                                    84
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "presaleVaultAta",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "presaleVault"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "usdToken"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "refererAAta",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "refererA"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "usdToken"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "refererA",
                    "writable": true
                },
                {
                    "name": "refererBAta",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "refererB"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "usdToken"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "refererB",
                    "writable": true
                },
                {
                    "name": "refererCAta",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "refererC"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "usdToken"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "refererC",
                    "writable": true
                },
                {
                    "name": "buyer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "buyerAta",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "buyer"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "usdToken"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "tokenAmount",
                    "type": "u64"
                },
                {
                    "name": "quoteAmount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "claimToken",
            "discriminator": [
                116,
                206,
                27,
                191,
                166,
                19,
                0,
                73
            ],
            "accounts": [
                {
                    "name": "presaleTokenMintAccount",
                    "writable": true
                },
                {
                    "name": "buyerPresaleTokenAssociatedTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "buyer"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "presaleTokenMintAccount"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "presalePresaleTokenAssociatedTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "presaleInfo"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "presaleTokenMintAccount"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "userInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    85,
                                    83,
                                    69,
                                    82,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "buyer"
                            }
                        ]
                    }
                },
                {
                    "name": "presaleInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "presaleAuthority"
                },
                {
                    "name": "buyer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                }
            ],
            "args": [
                {
                    "name": "bump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "createPresale",
            "discriminator": [
                176,
                144,
                197,
                158,
                61,
                119,
                75,
                135
            ],
            "accounts": [
                {
                    "name": "presaleInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "presaleVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    86,
                                    65,
                                    85,
                                    76,
                                    84
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mintUsdc"
                },
                {
                    "name": "mintUsdt"
                },
                {
                    "name": "toAssociatedUsdcAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "presaleVault"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mintUsdc"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "toAssociatedUsdtAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "presaleVault"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mintUsdt"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "authority",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "tokenMintAddress",
                    "type": "pubkey"
                },
                {
                    "name": "softcapAmount",
                    "type": "u64"
                },
                {
                    "name": "hardcapAmount",
                    "type": "u64"
                },
                {
                    "name": "maxTokenAmountPerAddress",
                    "type": "u64"
                },
                {
                    "name": "pricePerToken",
                    "type": "u64"
                },
                {
                    "name": "startTime",
                    "type": "u64"
                },
                {
                    "name": "endTime",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "depositToken",
            "discriminator": [
                11,
                156,
                96,
                218,
                39,
                163,
                180,
                19
            ],
            "accounts": [
                {
                    "name": "mintAccount",
                    "writable": true
                },
                {
                    "name": "fromAssociatedTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "fromAuthority"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "mintAccount"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "fromAuthority",
                    "signer": true
                },
                {
                    "name": "toAssociatedTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "presaleInfo"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "mintAccount"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "presaleVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    86,
                                    65,
                                    85,
                                    76,
                                    84
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "presaleInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "admin",
                    "writable": true
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "startPresale",
            "discriminator": [
                57,
                19,
                73,
                191,
                195,
                254,
                45,
                223
            ],
            "accounts": [
                {
                    "name": "presaleInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "authority",
                    "writable": true,
                    "signer": true
                }
            ],
            "args": [
                {
                    "name": "startTime",
                    "type": "u64"
                },
                {
                    "name": "endTime",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "updatePresale",
            "discriminator": [
                9,
                223,
                20,
                184,
                183,
                199,
                90,
                226
            ],
            "accounts": [
                {
                    "name": "presaleInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "authority",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "maxTokenAmountPerAddress",
                    "type": "u64"
                },
                {
                    "name": "pricePerToken",
                    "type": "u64"
                },
                {
                    "name": "softcapAmount",
                    "type": "u64"
                },
                {
                    "name": "hardcapAmount",
                    "type": "u64"
                },
                {
                    "name": "startTime",
                    "type": "u64"
                },
                {
                    "name": "endTime",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "withdrawSol",
            "discriminator": [
                145,
                131,
                74,
                136,
                65,
                137,
                42,
                38
            ],
            "accounts": [
                {
                    "name": "presaleInfo",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "presaleVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    86,
                                    65,
                                    85,
                                    76,
                                    84
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mintUsdc"
                },
                {
                    "name": "mintUsdt"
                },
                {
                    "name": "toAssociatedUsdcAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "presaleVault"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mintUsdc"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "toAssociatedUsdtAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "presaleVault"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mintUsdt"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "adminUsdcAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "admin"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mintUsdc"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "adminUsdtAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "admin"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mintUsdt"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "admin",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                },
                {
                    "name": "amountUsdt",
                    "type": "u64"
                },
                {
                    "name": "amountUsdc",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "withdrawToken",
            "discriminator": [
                136,
                235,
                181,
                5,
                101,
                109,
                57,
                81
            ],
            "accounts": [
                {
                    "name": "adminAssociatedTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "adminAuthority"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "presaleTokenMintAccount"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "presaleAssociatedTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "presaleInfo"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "presaleTokenMintAccount"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "presaleTokenMintAccount",
                    "writable": true
                },
                {
                    "name": "presaleInfo",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    80,
                                    82,
                                    69,
                                    83,
                                    65,
                                    76,
                                    69,
                                    95,
                                    83,
                                    69,
                                    69,
                                    68
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "adminAuthority",
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram"
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "presaleInfo",
            "discriminator": [
                11,
                19,
                36,
                47,
                79,
                104,
                214,
                40
            ]
        },
        {
            "name": "priceUpdateV2",
            "discriminator": [
                34,
                241,
                35,
                99,
                157,
                126,
                244,
                205
            ]
        },
        {
            "name": "userInfo",
            "discriminator": [
                83,
                134,
                200,
                56,
                144,
                56,
                10,
                62
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "unauthorized",
            "msg": "You are not authorized to perform this action."
        },
        {
            "code": 6001,
            "name": "notAllowed",
            "msg": "Not allowed"
        },
        {
            "code": 6002,
            "name": "mathOverflow",
            "msg": "Math operation overflow"
        },
        {
            "code": 6003,
            "name": "alreadyMarked",
            "msg": "Already marked"
        },
        {
            "code": 6004,
            "name": "presaleNotStarted",
            "msg": "Presale not started yet"
        },
        {
            "code": 6005,
            "name": "presaleEnded",
            "msg": "Presale already ended"
        },
        {
            "code": 6006,
            "name": "tokenAmountMismatch",
            "msg": "Token amount mismatch"
        },
        {
            "code": 6007,
            "name": "insufficientFund",
            "msg": "Insufficient Tokens"
        },
        {
            "code": 6008,
            "name": "presaleNotEnded",
            "msg": "Presale not ended yet"
        },
        {
            "code": 6009,
            "name": "hardCapped",
            "msg": "Presale already ended"
        },
        {
            "code": 6010,
            "name": "refererFilled",
            "msg": "Unable to add referer anymore"
        }
    ],
    "types": [
        {
            "name": "presaleInfo",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "tokenMintAddress",
                        "type": "pubkey"
                    },
                    {
                        "name": "presaleSolAmount",
                        "type": "u64"
                    },
                    {
                        "name": "softcapAmount",
                        "type": "u64"
                    },
                    {
                        "name": "hardcapAmount",
                        "type": "u64"
                    },
                    {
                        "name": "depositTokenAmount",
                        "type": "u64"
                    },
                    {
                        "name": "soldTokenAmount",
                        "type": "u64"
                    },
                    {
                        "name": "startTime",
                        "type": "u64"
                    },
                    {
                        "name": "endTime",
                        "type": "u64"
                    },
                    {
                        "name": "maxTokenAmountPerAddress",
                        "type": "u64"
                    },
                    {
                        "name": "pricePerToken",
                        "type": "u64"
                    },
                    {
                        "name": "isLive",
                        "type": "bool"
                    },
                    {
                        "name": "authority",
                        "type": "pubkey"
                    },
                    {
                        "name": "isSoftCapped",
                        "type": "bool"
                    },
                    {
                        "name": "isHardCapped",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "priceFeedMessage",
            "repr": {
                "kind": "c"
            },
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "feedId",
                        "docs": [
                            "`FeedId` but avoid the type alias because of compatibility issues with Anchor's `idl-build` feature."
                        ],
                        "type": {
                            "array": [
                                "u8",
                                32
                            ]
                        }
                    },
                    {
                        "name": "price",
                        "type": "i64"
                    },
                    {
                        "name": "conf",
                        "type": "u64"
                    },
                    {
                        "name": "exponent",
                        "type": "i32"
                    },
                    {
                        "name": "publishTime",
                        "docs": [
                            "The timestamp of this price update in seconds"
                        ],
                        "type": "i64"
                    },
                    {
                        "name": "prevPublishTime",
                        "docs": [
                            "The timestamp of the previous price update. This field is intended to allow users to",
                            "identify the single unique price update for any moment in time:",
                            "for any time t, the unique update is the one such that prev_publish_time < t <= publish_time.",
                            "",
                            "Note that there may not be such an update while we are migrating to the new message-sending logic,",
                            "as some price updates on pythnet may not be sent to other chains (because the message-sending",
                            "logic may not have triggered). We can solve this problem by making the message-sending mandatory",
                            "(which we can do once publishers have migrated over).",
                            "",
                            "Additionally, this field may be equal to publish_time if the message is sent on a slot where",
                            "where the aggregation was unsuccesful. This problem will go away once all publishers have",
                            "migrated over to a recent version of pyth-agent."
                        ],
                        "type": "i64"
                    },
                    {
                        "name": "emaPrice",
                        "type": "i64"
                    },
                    {
                        "name": "emaConf",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "priceUpdateV2",
            "docs": [
                "A price update account. This account is used by the Pyth Receiver program to store a verified price update from a Pyth price feed.",
                "It contains:",
                "- `write_authority`: The write authority for this account. This authority can close this account to reclaim rent or update the account to contain a different price update.",
                "- `verification_level`: The [`VerificationLevel`] of this price update. This represents how many Wormhole guardian signatures have been verified for this price update.",
                "- `price_message`: The actual price update.",
                "- `posted_slot`: The slot at which this price update was posted."
            ],
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "writeAuthority",
                        "type": "pubkey"
                    },
                    {
                        "name": "verificationLevel",
                        "type": {
                            "defined": {
                                "name": "verificationLevel"
                            }
                        }
                    },
                    {
                        "name": "priceMessage",
                        "type": {
                            "defined": {
                                "name": "priceFeedMessage"
                            }
                        }
                    },
                    {
                        "name": "postedSlot",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "userInfo",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "buyQuoteAmount",
                        "type": "u64"
                    },
                    {
                        "name": "buyTokenAmount",
                        "type": "u64"
                    },
                    {
                        "name": "buyTime",
                        "type": "u64"
                    },
                    {
                        "name": "claimTime",
                        "type": "u64"
                    },
                    {
                        "name": "referer",
                        "type": "pubkey"
                    }
                ]
            }
        },
        {
            "name": "verificationLevel",
            "docs": [
                "Pyth price updates are bridged to all blockchains via Wormhole.",
                "Using the price updates on another chain requires verifying the signatures of the Wormhole guardians.",
                "The usual process is to check the signatures for two thirds of the total number of guardians, but this can be cumbersome on Solana because of the transaction size limits,",
                "so we also allow for partial verification.",
                "",
                "This enum represents how much a price update has been verified:",
                "- If `Full`, we have verified the signatures for two thirds of the current guardians.",
                "- If `Partial`, only `num_signatures` guardian signatures have been checked.",
                "",
                "# Warning",
                "Using partially verified price updates is dangerous, as it lowers the threshold of guardians that need to collude to produce a malicious price update."
            ],
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "partial",
                        "fields": [
                            {
                                "name": "numSignatures",
                                "type": "u8"
                            }
                        ]
                    },
                    {
                        "name": "full"
                    }
                ]
            }
        }
    ],
    "constants": [
        {
            "name": "presaleSeed",
            "type": "bytes",
            "value": "[80, 82, 69, 83, 65, 76, 69, 95, 83, 69, 69, 68]"
        }
    ]
};
