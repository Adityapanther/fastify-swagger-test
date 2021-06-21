const user = async function (fastify, opts) {
    fastify.get('/auth',{schema: {
        summary: "login or auth user to our server",
        tags: [{name: "user"}],
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
            res.send({
                satusCode: 200,
                data: {
                    uid: 120,
                    authToken: "xmpp",
                    status: "success"
                }
            })
        } else {
            res.send({
                satusCode: 400,
                data: {
                    status: "error",
                    msg: "user does not exits"
                }
            })
        }



    })

    fastify.get("/pageList",{ schema: {
        summary: "get user page List",
        tags: [{name: "user"}],
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
            }
        }
    }}, (req, res) => {
        const {
            authtoken
        } = req.headers;

        if (authtoken === "xmpp") {
            res.send({
                satusCode: 200,
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
            res.send({
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