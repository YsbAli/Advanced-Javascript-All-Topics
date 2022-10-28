// async function navbar(){
//     return `
//     <div id="navbar">
//         <h3> <a href="index.html">Home</a></h3>
    
//         <div class="options">
//             <h3> <a href="users.html">Users</a></h3>
//             <h3> <a href="posts.html">Posts</a></h3>
//             <h3> <a href="#">Register</a></h3>
    
//             <h3> <a href="#">Login</a></h3>
//         </div>
//     </div>
//     `
// }

// export default navbar;








async function navbar(){
    return `<div id="navbar">
        <h3> <a href="/">Home</a></h3>
    
        <div class="options">
            <h3> <a href="users.html">Users</a></h3>
            <h3> <a href="posts.html">Posts</a></h3>
            <h3> <a href="#">Register</a></h3>
    
            <h3> <a href="#">Login</a></h3>
        </div>
    </div>`
}

export default navbar;                  // it means you are exporting only one thing

// export { navbar }                  // can do also like this but for this we have to do - import {navbar} from './navbar.js'