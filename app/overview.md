










form                    {
  |     
  ↦-- #orderEmail -->  orderEmail: ...
  ↦-- #orderPhone -->  orderPhone: ...
  ↦-- #.... 
                        } --- json.stringify() ---+- fetch(/api/order)
                                                  |
                                                  +--body{}-----HTTP----+
                                                                        |
                                                                       req
                                                                      chunks
                                                                        |