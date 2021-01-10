import logo from './logo.svg';
import './App.css';
import PostAuthor from "./Post"
import Post from './Post.js';
const ANAKIN_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZs0i2gN-lcm74BLaEyL-gzWxQnmwW0fl7Q&usqp=CAU";
const RAY_IMAGE = "https://data-vyhoda.ru/wp-content/uploads/2019/02/Povorot-ne-tuda-7-data-vyhoda.jpg";
const babay = "https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/50593747_1515773551887120_8430035510780493824_n.jpg?_nc_cat=104&ccb=2&_nc_sid=85a577&_nc_ohc=c5xhhGHC4sgAX8Fplgj&_nc_ht=scontent.fiev22-2.fna&oh=0d59f590c43541cafbdd13d27d4822e9&oe=602114CA";
const Povorot = "https://64.media.tumblr.com/tumblr_mc362p66zr1qkktc4o3_500.gifv";


function App() {
  return (
    <div className="App">
      <Post author={{
        name: "Надя Савченко",
        photo: ANAKIN_IMAGE,
        nickname: "@надя"
      }}
        content="Я тебе не боюся клятий вилупку!!!"
        image={RAY_IMAGE}
        date={"26 февраля"}
      />
      <Post author={{
        name: "БАБАЙ",
        photo: babay,
        nickname: "@бабай"
      }}
        content="/...а шо это ты носишь обручальное кольцо не на том пальце?"
        image={Povorot}
        date={"27 февраля"}
      />
    </div>
  );
}

export default App;
