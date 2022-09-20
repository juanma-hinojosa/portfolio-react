// import { useState } from "react";

// export default function GitHubRepos() {
//     const [repoData, setRepoData] = useState()

//     async function repoDataURL() {
//         await fetch ("https://api.github.com/users/juanma-hinojosa/repos")
//         .then((res) => res.json())
//         .then(
//             (result => {
//                 console.log(36, result);
//                 const list = result.map((item) => (
//                     <div className="repo-container">
//                         <h2>{item.name}</h2>
//                         <a target="_blank" href={item.svn_url}>Ver Codigo</a>
//                         <a target="_blank" href={item.homepage}>Ver Proyecto</a>
//                         <p>{item.description}</p>
//                     </div>
//                 ));
//                 setRepoData(list)
//             },
//                 (error) => {
//                     console.log(error);
//                 }
//             )
//         )
//     }
    
//     return(
//         <div className="github-container">
//             <h1>Estamos en repos</h1>
//             <div className="repo-wrapper">
//                 {list.result.map(item => 
//                         <div className="repo-container">
//                             <h2>{item.name}</h2>
//                             <a target="_blank" href={item.svn_url}>Ver Codigo</a>
//                             <a target="_blank" href={item.homepage}>Ver Proyecto</a>
//                             <p>{item.description}</p>
//                         </div>
//                 )}
                
//             </div>
//         </div>
//     )
// }