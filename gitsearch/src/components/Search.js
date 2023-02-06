import React from 'react'
import User from './User'

function Search() {
  let data = [
    {
      "login": "DEADPOOL",
      "id": 1848707,
      "node_id": "MDQ6VXNlcjE4NDg3MDc=",
      "avatar_url": "https://timesofindia.indiatimes.com/thumb/msid-64137580,width-800,height-600,resizemode-4/64137580.jpg?imglength=47128",
      "gravatar_id": "",
      "url": "https://api.github.com/users/zoheb",
      "html_url": "https://github.com/zoheb",
      "followers_url": "https://api.github.com/users/zoheb/followers",
      "following_url": "https://api.github.com/users/zoheb/following{/other_user}",
      "gists_url": "https://api.github.com/users/zoheb/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/zoheb/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/zoheb/subscriptions",
      "organizations_url": "https://api.github.com/users/zoheb/orgs",
      "repos_url": "https://api.github.com/users/zoheb/repos",
      "events_url": "https://api.github.com/users/zoheb/events{/privacy}",
      "received_events_url": "https://api.github.com/users/zoheb/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Wolverine",
      "id": 23161965,
      "node_id": "MDQ6VXNlcjIzMTYxOTY1",
      "avatar_url": "https://timesofindia.indiatimes.com/thumb/msid-64137580,width-800,height-600,resizemode-4/64137580.jpg?imglength=47128",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ZohebAbai",
      "html_url": "https://github.com/ZohebAbai",
      "followers_url": "https://api.github.com/users/ZohebAbai/followers",
      "following_url": "https://api.github.com/users/ZohebAbai/following{/other_user}",
      "gists_url": "https://api.github.com/users/ZohebAbai/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ZohebAbai/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ZohebAbai/subscriptions",
      "organizations_url": "https://api.github.com/users/ZohebAbai/orgs",
      "repos_url": "https://api.github.com/users/ZohebAbai/repos",
      "events_url": "https://api.github.com/users/ZohebAbai/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ZohebAbai/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "IronMan",
      "id": 72716462,
      "node_id": "MDQ6VXNlcjcyNzE2NDYy",
      "avatar_url": "https://timesofindia.indiatimes.com/thumb/msid-64137580, width-800,height-600,resizemode-4/64137580.jpg?imglength=47128",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ZohebMOPO",
      "html_url": "https://github.com/ZohebMOPO",
      "followers_url": "https://api.github.com/users/ZohebMOPO/followers",
      "following_url": "https://api.github.com/users/ZohebMOPO/following{/other_user}",
      "gists_url": "https://api.github.com/users/ZohebMOPO/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ZohebMOPO/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ZohebMOPO/subscriptions",
      "organizations_url": "https://api.github.com/users/ZohebMOPO/orgs",
      "repos_url": "https://api.github.com/users/ZohebMOPO/repos",
      "events_url": "https://api.github.com/users/ZohebMOPO/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ZohebMOPO/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Zobee",
      "id": 9866743,
      "node_id": "MDQ6VXNlcjk4NjY3NDM=",
      "avatar_url": "https://timesofindia.indiatimes.com/thumb/msid-64137580,width-800,height-600,resizemode-4/64137580.jpg?imglength=47128",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Zobee",
      "html_url": "https://github.com/Zobee",
      "followers_url": "https://api.github.com/users/Zobee/followers",
      "following_url": "https://api.github.com/users/Zobee/following{/other_user}",
      "gists_url": "https://api.github.com/users/Zobee/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Zobee/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Zobee/subscriptions",
      "organizations_url": "https://api.github.com/users/Zobee/orgs",
      "repos_url": "https://api.github.com/users/Zobee/repos",
      "events_url": "https://api.github.com/users/Zobee/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Zobee/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Krishh",
      "id": 26975142,
      "node_id": "MDQ6VXNlcjI2OTc1MTQy",
      "avatar_url": "https://cdn.siasat.com/wp-content/uploads/2021/06/krishh.jpg",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ZohebShaikh",
      "html_url": "https://github.com/ZohebShaikh",
      "followers_url": "https://api.github.com/users/ZohebShaikh/followers",
      "following_url": "https://api.github.com/users/ZohebShaikh/following{/other_user}",
      "gists_url": "https://api.github.com/users/ZohebShaikh/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ZohebShaikh/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ZohebShaikh/subscriptions",
      "organizations_url": "https://api.github.com/users/ZohebShaikh/orgs",
      "repos_url": "https://api.github.com/users/ZohebShaikh/repos",
      "events_url": "https://api.github.com/users/ZohebShaikh/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ZohebShaikh/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Mr India",
      "id": 16187941,
      "node_id": "MDQ6VXNlcjE2MTg3OTQx",
      "avatar_url": "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2018/06/download-3-1529858730.jpg",
      "gravatar_id": "",
      "url": "https://api.github.com/users/zoheb391",
      "html_url": "https://github.com/zoheb391",
      "followers_url": "https://api.github.com/users/zoheb391/followers",
      "following_url": "https://api.github.com/users/zoheb391/following{/other_user}",
      "gists_url": "https://api.github.com/users/zoheb391/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/zoheb391/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/zoheb391/subscriptions",
      "organizations_url": "https://api.github.com/users/zoheb391/orgs",
      "repos_url": "https://api.github.com/users/zoheb391/repos",
      "events_url": "https://api.github.com/users/zoheb391/events{/privacy}",
      "received_events_url": "https://api.github.com/users/zoheb391/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "PaTHAAN",
      "id": 14791925,
      "node_id": "MDQ6VXNlcjE0NzkxOTI1",
      "avatar_url": "https://img.etimg.com/thumb/msid-95272763,width-1200,height-900,imgsize-31264,overlay-etpanache/photo.jpg",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Zoheb-hassan",
      "html_url": "https://github.com/Zoheb-hassan",
      "followers_url": "https://api.github.com/users/Zoheb-hassan/followers",
      "following_url": "https://api.github.com/users/Zoheb-hassan/following{/other_user}",
      "gists_url": "https://api.github.com/users/Zoheb-hassan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Zoheb-hassan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Zoheb-hassan/subscriptions",
      "organizations_url": "https://api.github.com/users/Zoheb-hassan/orgs",
      "repos_url": "https://api.github.com/users/Zoheb-hassan/repos",
      "events_url": "https://api.github.com/users/Zoheb-hassan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Zoheb-hassan/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Ray",
      "id": 26777494,
      "node_id": "MDQ6VXNlcjI2Nzc3NDk0",
      "avatar_url": "https://avatars.githubusercontent.com/u/26777494?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Zoheb0707",
      "html_url": "https://github.com/Zoheb0707",
      "followers_url": "https://api.github.com/users/Zoheb0707/followers",
      "following_url": "https://api.github.com/users/Zoheb0707/following{/other_user}",
      "gists_url": "https://api.github.com/users/Zoheb0707/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Zoheb0707/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Zoheb0707/subscriptions",
      "organizations_url": "https://api.github.com/users/Zoheb0707/orgs",
      "repos_url": "https://api.github.com/users/Zoheb0707/repos",
      "events_url": "https://api.github.com/users/Zoheb0707/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Zoheb0707/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    }
    
  ]
  return (
    <>
    <h1>GitHub Search Engine</h1>
    <div className='search'>
   <section className="webdesigntuts-workshop">
	<form>		    
		<input type="search" placeholder="Search for the user"/>		    	
		<button>Search</button>
   
	</form>
</section>
<center>
<img src='https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg' alt='logo'/>

</center>
</div>
<div className="container">
     {
       data.map(item => {
         return <User profile={item.url} name={item.login} imageURL={item.avatar_url}/>
       })
     }
      </div>

    </>
    
  )
}

export default Search