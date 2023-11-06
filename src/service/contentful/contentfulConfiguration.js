import { createClient } from "contentful";

const contentfulConfig = () => {

    const client = createClient({
        space: "kw4ib93qcl5n",
        accessToken: "PW2eCE2_FsOgzJCcDQjltadtHM4sBq2vbqvCzEQWjrg",
        host: "cdn.contentful.com"
    });

    return { client };
}

export default contentfulConfig;