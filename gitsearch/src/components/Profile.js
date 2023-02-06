import React from 'react'
import { useNavigate } from 'react-router-dom'


function Profile() {
    let navigate = useNavigate();
    let user = {
        "login": "quayyum_",
        "id": 109140390,
        "node_id": "U_kgDOBoFZpg",
        "avatar_url": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/deadpool-promo-Cropped.jpg",
        "gravatar_id": "",
        "url": "https://api.github.com/users/zoheballadin",
        "html_url": "https://github.com/zoheballadin",
        "followers_url": "https://api.github.com/users/zoheballadin/followers",
        "following_url": "https://api.github.com/users/zoheballadin/following{/other_user}",
        "gists_url": "https://api.github.com/users/zoheballadin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/zoheballadin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/zoheballadin/subscriptions",
        "organizations_url": "https://api.github.com/users/zoheballadin/orgs",
        "repos_url": "https://api.github.com/users/zoheballadin/repos",
        "events_url": "https://api.github.com/users/zoheballadin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/zoheballadin/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Abdul Quayyum",
        "company": "Code For India Foundation",
        "location": "Hyderabad, India",
        "email": null,
        "hireable": null,
        "bio": "Aspiring full-stack developer | \r\nMERN stack | Scholar Class of B22 at Code For India ",
        "twitter_username": "zoheballadin",
        "public_repos": 8,
        "public_gists": 0,
        "followers": 6,
        "following": 14,
        "created_at": "2022-07-12T08:47:15Z",
        "updated_at": "2023-01-30T04:17:27Z"
      }
  return (
    <>
    <div className='profile'>
        <div className='info'>
            <h1 class='uname'>{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <h3>Bio</h3>
            <p id='bio'>{user.bio}</p>
            <p><b>Open for Hiring:</b> {user.hireable ? "Yes" : "No"}</p>
            <p></p>
            <button>Go to Github Profile</button>
            <p className='additional'>Followers: {user.followers}</p>
            <p className='additional'>Following: {user.following}</p>
            <p className='additional'>Company: {user.company}</p>
            <p className='additional'>Location: {user.location}</p>
            <p className='additional'>Website: {user.blog}</p>
        </div>
        <div className='repositories'>
            <button onClick={()=>navigate("/")}>Go Back</button>
            <h3 className="repos">CFI B22 WORKS</h3>
            <h3 className="repos">TODO CLI</h3>
            <h3 className="repos">abdulquayyum_</h3>
            <h3 className="repos">Repo 4</h3>
            <h3 className="repos">Repo 5</h3>
        </div>
    </div>
    </>
  )
}

export default Profile