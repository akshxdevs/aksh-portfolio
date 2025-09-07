import { prismaClient } from "../db/db";

async function Main() {
    await prismaClient.projects.create({
        data:{
            projectTitle:"Grocery-App",
            projectDescription:"Seamless grocery shopping—fresh picks, fast delivery, and hassle-free checkout at your fingertips. A Zepto based clone",
            githubLink:"https://github.com/akshxdevs/Grocery-App",
            projectImg:"https://media-hosting.imagekit.io/87442a1d04c144f5/WhatsApp Image 2025-03-28 at 19.00.22.jpeg?Expires=1838040965&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Lvc2ClbOAUbhsQN3r0hDMuALbe0sP0B1GQWFXw8Na-xzCk9tN8SMTRGOL5uNrBh9jH0-oc41HAxkneD0-AwRv6LkeT~y-Rr-Jp4kRz6p0Zwt1ihkju2oq0a5FxYlfdbNk94s~JlheyfAR~U6JVAMkBhQGqDRRGCQyiaOO-XFmcanHs6JxYbjBXhx9o0ZGAwzX8kEGEXckq4Q4JZ2LNSs8izZ43bfyfaDSk6hk~Gk8AtmwpOYMsZ03gOfZDY6W4FJdPPaMBYT-WaxAqoI79sGi04uC170RN~tB04IPwg2GqZvoP2bG27xtymq5VeNstHOWpOSQ9qfSIIWnwUBNypx3Q__"
        }
    })
    await prismaClient.projects.create({
        data:{
            projectTitle:"Blog-App",
            projectDescription:"A sleek and intuitive platform to share ideas, explore insights, and connect through powerful storytelling. A Substack based clone",
            githubLink:"https://github.com/akshxdevs/Blog-App",
            projectImg:"https://media-hosting.imagekit.io/19df9a57a5a6420f/WhatsApp Image 2025-03-28 at 18.56.10.jpeg?Expires=1838041129&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HbaDru~Q1TCp50zxafYbDTUAOXohQaX94mkSqzWPgFrWR1U-ViA6orFE~l73Hxp6u3OoLSCUrYbLIg~LPMyUfMO4PIXVUVR-6W696JrDqqgXRWwVEARNg075A2TVRVwfNlYQ3MdhIZ7vTQd4JVN7f~tPNOBMV~CI9V9FBYUZAgs1Js4zz-5jfKlhmWBE6oiiwifcRkqKcjhgf4wSJpIPCVk7a47Hm7KpRe~PO2gehYvo2rsy9uy2JVXEXpqz0enPaSTHsrTYUD9tTocE91OFqgA9s8ld1mzHKdx9HEmYl2s9ZiANeEhmsAV1P~0yEVGW8RDqrqx6tCgjKc0fwWD3pQ__"
        }
    })
    await prismaClient.projects.create({
        data:{
            projectTitle:"Social-Media-App",
            projectDescription:"Connect, share, and chat seamlessly—your social world, all in one place.",
            githubLink:"https://github.com/akshxdevs/Social-Media-App",
            projectImg:"https://media-hosting.imagekit.io/f75eaaa63b5d4311/WhatsApp Image 2025-03-28 at 18.54.37.jpeg?Expires=1838041133&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w~5TT-JpaCayCAJzmx8kxm14tANlzXrMsXctlRS41GyTzl7lK4m2h5W3mDSnAe05kOUHqcrUX9kl8NuqjXRTWaunjwHZthcIWJ7O0gVGKvS1ZJMyCP0hipWz916g6VxcgtpPmeFv~xl96JaX1eugshGtUU9PXbnydkClPYy7zETlyYLkOEYDKkpUi4PtyM0gj-Pt6HWcHzsMhxgUBo4fHwjKxBv-Eo8V83SKNo6V44XVkuqmsstmaGMChF8-O35ZpPuO3~YwETwNAGXGyTNggJAJxxfe3NBdAQjuTHcrrjf6K8FULalwf-Yqa3lDLp~shDoAJka3vdplN5nTT7p~NA__"
        }
    })
}

Main();