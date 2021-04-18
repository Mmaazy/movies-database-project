import React, { Component } from 'react';

import b from '../assets/images/2.jpg'
import c from '../assets/images/3.jpg'
import d from '../assets/images/4.jpg'
import e from '../assets/images/5.jpg'
import f from '../assets/images/6.jpg'
import g from '../assets/images/7.jpg'
import h from '../assets/images/8.jpg'
import i from '../assets/images/9.jpg'
import j from '../assets/images/10.jpg'
import k from '../assets/images/11.jpg'

class watchMovies extends Component {
    state = { 
      movies: [],
      genres: [],
      currentPage: 1,
      pageSize: 4,
      sortColumn: { path: "title", order: "asc" }
     };

     handlePageChange = page => {
      this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
      this.setState({ selectedGenre: genre, currentPage: 1 });
    };


    render() { 
        return ( 
            <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Movie</th>
      <th scope="col">Genre</th>
      <th scope="col">Industry</th>
      <th scope="col">Rating</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><div><img height="200" src={b}/></div></td>
      <td>Thriller</td>
      <td>Hollywood</td>
      <td>8.8</td>
      <td><a href="https://www.netflix.com/watch/70131314?trackId=13752289&tctx=0%2C0%2Cf246e220b301b0daad81e4a412e8f0b3638190b3%3A86c269c35104974bb08cce53b8f8eadeac4a4b39%2C%2C">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><div><img height="200" width="135" src={c}/></div></td>
      <td>Thriller/Suspense</td>
      <td>Hollywood</td>
      <td>8.0</td>
      <td><a href="url">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><div><img height="200" width="135" src={d}/></div></td>
      <td>Thriller/Suspense</td>
      <td>Bollywood</td>
      <td>8.2</td>
      <td><a href="https://www.netflix.com/watch/81039381?trackId=13752289&tctx=0%2C0%2Cedc2cac9ae9f436c4fdca2139a095cb92bdff62a%3A063836ecac86b156692e464cb45367fb5703ec95%2C%2C">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><div><img height="200" width="135" src={e}/></div></td>
      <td>Adventure</td>
      <td>Hollywood</td>
      <td>7.8</td>
      <td><a href="https://www.netflix.com/watch/81001887?trackId=13752289&tctx=0%2C0%2C8bf2209cdbe11fd5b8f6c0323c41c2e8ebaa013a%3A05506a554c4e8a7fd94ecc799e40d97e6bd03c3e%2C%2C">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td><div><img height="200" width="135" src={f}/></div></td>
      <td>Love Story</td>
      <td>Lollywood</td>
      <td>7.1</td>
      <td><a href="https://www.netflix.com/watch/80142637?trackId=13752289&tctx=0%2C0%2C3edf01b867e7418654c581d60bd4d3b49939b39a%3A3a67a2b28c76499c9cb7853d0c6e441a984fa00b%2C%2C">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td><div><img height="200" width="135" src={g}/></div></td>
      <td>Love Story</td>
      <td>Bollywood</td>
      <td>6.9</td>
      <td><a href="https://www.netflix.com/watch/81107545?trackId=13752289&tctx=0%2C0%2Ce10987bbad735ae73acb4c2eee29115d97e08de8%3A90eac8e85d5aee418b985b0863f07dff30a970c0%2C%2C">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td><div><img height="200" width="135" src={h}/></div></td>
      <td>Animated/Thriller</td>
      <td>Hollywood</td>
      <td>9.0</td>
      <td><a href="https://www.netflix.com/watch/80164399?trackId=13752289&tctx=0%2C0%2C501b9be7a89c278783b16084668c372118b256f8%3A7e3cefe7f8bf5ced87bb180ade198c4ec3062746%2C%2C">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td><div><img height="200" width="135" src={i}/></div></td>
      <td>Cartoon Animated</td>
      <td>hollywood</td>
      <td>9.4</td>
      <td><a href="https://www.netflix.com/watch/70253393?trackId=13752289&tctx=0%2C0%2Cc5c607bed789903e1eed843c29f9c48182e91ef5%3A223ec0dd1dbd1fea649784e5e6a0f34da9b25b45%2C%2C">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td><div><img height="200" width="135" src={j}/></div></td>
      <td>Love story</td>
      <td>Bollywood</td>
      <td>7.3</td>
      <td><a href="https://www.netflix.com/watch/70202336?trackId=13752289&tctx=0%2C0%2Cc57c3cfd8af1964b3812e874e4e4befbcc01d62c%3Afe2b62afbbd88d8ad10dec4e158257af32a18003%2C%2C">Watch now</a></td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td><div><img height="200" width="135" src={k}/></div></td>
      <td>Cartoon</td>
      <td>Bollywood</td>
      <td>8.1</td>
      <td><a href="https://www.netflix.com/watch/60020686?trackId=13752289&tctx=0%2C1%2C550f61d9e0f12b21061583aee31d53ac42cb67ce%3A2a506981a9ab0c7600e8ff310d1939b3e9b63531%2C%2C">Watch now</a></td>
    </tr>
  </tbody>
</table>


         );
    }
}
 
export default watchMovies;