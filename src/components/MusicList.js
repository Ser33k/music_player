import MusicListItem from "./MusicListItem";

const MusicList = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const listItems = data.map((item) => (
    <MusicListItem audioRef={props.audioRef} />
  ));
  return (
    <ul className="list">
      <li className="list__item">
        <img
          className="list__item-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mSXj2A2zh92CV9tMNKfnvf3iq5ZRIPQr_w&usqp=CAU"
          alt="icon"
        />
        <div className="list__item-texts">
          <p className="list__item-title">Flowers</p>
          <p className="list__item-artist">Miley Cyrussss</p>
        </div>
        <button className="list__item-play active"></button>
        {/* <img src={star} alt="star" className="list__item-star" /> */}
      </li>
      {listItems}
    </ul>
  );
};

export default MusicList;
