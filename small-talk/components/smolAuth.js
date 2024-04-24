import { getCookie } from "@/util/smolCookie";

export function smolAuth(getServerSidePropsFunc) {
    return async (ctx) => {
        const { req } = ctx;
        
        if (req.headers.cookie) {
            const session_id = getCookie("session_id", req.headers.cookie);
            //console.log(session_id)
            try {
                let response = await fetch("http://" + req.headers.host + "/api/auth2/", {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : session_id
                    }
                })

                let json = (await response.json());
                
                if (json == null) {
                    return {
                        redirect: {
                        permanent: false,
                        destination: '/login',
                        },
                    };
                }
                //console.log(json)
                let isFound = (json.found != null) ? json.found : false;

                if (isFound == false) {

                    console.log("SMOLAUTH: NOT FOUND")

                    //console.log("SMOLAUTH: NOT FOUND")

                    return {
                        redirect: {
                        permanent: false,
                        destination: '/login',
                        },
                    };
                }
                else
                {
                    //console.log("SMOLAUTH: FOUND")
                    return getServerSidePropsFunc(ctx);
                }
            } catch (error) {
                // Failure in the query or any error should fallback here
                // this route is possibly forbidden means the cookie is invalid
                // or the cookie is expired
                return {
                    redirect: {
                        permanent: false,
                        destination: '/login',
                    },
                };
            }
        }
        //console.log("SMOLAUTH: FOUND2")

        return {
            redirect: {
            permanent: false,
            destination: '/login',
            },
        };
        //return await getServerSidePropsFunc(ctx);
    };
  }
  //