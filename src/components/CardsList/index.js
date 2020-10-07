import React from "react";
import { useDispatch } from "react-redux";
import { HiOutlineDotsVertical } from "react-icons/hi";

// import { showModal } from "../../redux/modals/modalsSlice";
import { deleteCardsList } from "../../redux/cards/cardsSlice";

// import TravelCard from "../TravelCard";

import { Container } from "./styles";

const CardsList = ({ data, title, index }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div
        index={index}
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
        }}
      >
        <div style={{ width: "900px", height: "475px" }}>
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src="https://cdn.getyourguide.com/img/location/5c04f6f20650d.jpeg/148.jpg"
            alt=""
          />
        </div>
        <div>
          <div
            style={{
              background: "#ED5C5C",
              width: "360px",
              height: "89px",
            }}
          >
            <h2
              style={{
                height: "100%",
                padding: "10px",
                verticalAlign: "center",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "48px",
                color: "#FFFFFF",
                backdropFilter: "blur(100px)",
                textAlign: "center",
              }}
            >{`${title}`}</h2>
          </div>
          <div>
            <div>
              <h3>Sep, 22</h3>
            </div>
            <h3>In 5mths</h3>
          </div>
          <div></div>
          <div></div>
          <button>Delete</button>
          <button>Share</button>
        </div>
        <HiOutlineDotsVertical
          size={24}
          color={"var(--grey)"}
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(deleteCardsList(index))}
        />
      </div>

      {/* <header index={index}>
        <h2>{`${title}`}</h2>
        <div>
          {index === 0 ? (
            <button
              type="button"
              onClick={() => dispatch(showModal("TRAVEL_CARD"))}
            >
              <MdAdd size={24} color={"var(--white)"} />
            </button>
          ) : null}
        </div>
      </header>
      <ul></ul> */}
    </Container>
  );
};

export default CardsList;
