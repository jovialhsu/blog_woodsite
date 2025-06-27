import "gitalk/dist/gitalk.css";
import GitalkComponent from "gitalk/dist/gitalk-component";
import React from 'react'

function Gitalk() {
    return (
        <>
          <GitalkComponent options={{
            clientID: "0c28bd9cbdc37c78447a",
            clientSecret: "4578277a67f11d095507b93cc44e07c92bdf65d6",
            repo: "blog_woodsite",
            owner: "jovialhsu",
            admin: ["jovialhsu"],
            createIssueManually:true,
            // ...
            // options below
          }} />  
        </>
    )
}

export default Gitalk
