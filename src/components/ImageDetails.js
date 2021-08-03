import PropTypes from "prop-types";
import Modal from "./Modal";
import isEmpty from "lodash/isEmpty";

function ImageDetails({ data, handleClose }) {
  const { user } = data;
  return (
    <Modal show={!isEmpty(data)} handleClose={handleClose}>
      <div className="wrapper">
        <div
          className="img-wrapper"
          style={{
            backgroundImage: `url(${data.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* <img src={data.img} alt={data.title} />
        </div> */}
        <div className="img-details">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className="divider" />

          <div className="user-details">
            <img src={user?.profile_image} alt={user?.first_name} />
            <div className="user-text">
              <p className="name">{`${user?.first_name} ${user?.last_name}`}</p>
              <p className="title">{user?.title}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
ImageDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default ImageDetails;
