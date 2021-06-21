const user = async function (fastify, opts) {
    fastify.get('/auth',{schema: {
        summary: "login or auth user to our server",
        tags: ["user"],
        headers: {
            type: "object",
            properties: {
                email: {
                    type: "string"
                },
                password: {
                    type: "string"
                }
            }
        },
        response: {
            200: {
                type: "object",
                properties: {
                    statusCode: {
                        type: "number",
                        default: 200
                    },
                    data: {
                        type: "object",
                        properties: {
                            uid: {
                                type: "number",
                                default: 10
                            },
                            authToken: {
                                type: "string",
                                default: "avnfch"
                            },
                            status: {
                                type: "string",
                                default: "success"
                            }
                        }
                    }
                }
            }
        }
    }}, async (req, res) => {

        const {
            email,
            password
        } = req.headers;

        if (email === "123@gmail.com" && password === "12345") {
            res.code(200).send({
                statusCode: 200,
                data: {
                    uid: 120,
                    authToken: "xmpp",
                    status: "success"
                }
            })
        } else {
            res.code(400).send({
                statusCode: 400,
                data: {
                    status: "error",
                    msg: "user does not exits"
                }
            })
        }



    })

    fastify.get("/pageList",{ schema: {
        summary: "get user page List",
        tags: ["user"],
        headers: {
            type: "object",
            properties: {
                authToken: {
                    type: "string"
                }
            }
        },
        response: {
            200: {
                type: "object",
                properties: {
                    statusCode: {
                        type: "number",
                        default: 200
                    },
                    data: {
                        type: "object",
                        properties: {
                            status: {
                                type: "string",
                                default: "success"
                            },
                            msg: {
                                type: "string",
                                default: "page list found"
                            },
                            data: {
                                type: "object",
                                properties: {
                                    pageList: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    default: "hello mini"
                                                },
                                                id: {
                                                    type: "number",
                                                    default: "20"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            400: {
                type: "object",
                properties: {
                    statusCode: {
                        type: "number",
                        default: 400
                    },
                    data: {
                        type: "object",
                        properties: {
                            status: {
                                type: "string",
                                default: "success"
                            },
                            msg: {
                                type: "string",
                                default: "invalid auth token"
                            }
                        }
                    }
                }
            }
        }
    }}, (req, res) => {
        const {
            authtoken
        } = req.headers;

        if (authtoken === "xmpp") {
            res.code(200).send({
                statusCode: 200,
                data: {
                    status: "success",
                    msg: "page list found",
                    data: {
                        pageList: [{
                                name: "human",
                                id: 1
                            },
                            {
                                name: "human base",
                                id: 2
                            }
                        ]
                    }
                }
            })
        }else{
            res.code(400).send({
                statusCode: 400,
                data: {
                    status: "error",
                    msg: "unable to find pageList"
                }
            })
        }
    })
}

module.exports = user;