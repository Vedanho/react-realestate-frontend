import styles from "./cardApartment.module.css";
import { BsGeoAltFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { TbLayoutBoard } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getApartments } from "../../../features/apartmentSlice";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const CardApartment = () => {
  const dispatch = useDispatch();
  const apartments = useSelector((state) => state.apartmentReducer.apartments);

  const [limit, setLimit] = useState(4);

  const handleShow = () => {
    setLimit((limit += 2));
  };

  const handleHide = () => {
    if (limit > 0) {
      setLimit(4);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    dispatch(getApartments());
  }, [dispatch]);

  return (
    <>
      <div className={styles.main}>
        {apartments.map((apartment, index) => {
          if (index + 1 <= limit) {
            return (
              <>
                <div className={styles.card} data-aos="fade-left">
                  <div className={styles.tag_wrapper}>
                    <div className={styles.featured_wrapper}>Featured</div>
                    <div className={styles.rentals}>Rentals</div>
                  </div>

                  <Link href={`/property/${apartment._id}`}>
                    <div className={styles.img_container}>
                      <img src={apartment.image} alt="apartment photo" />
                    </div>
                  </Link>

                  <div className={styles.icon_details_wrapper}>
                    <div className={styles.details_wrapper}>
                      <BsGeoAltFill className={styles.goLocation} />
                      <Link href={`/map`}><b>Winchester,</b></Link>
                      <Link href={`/map`}><b>Las Vegas</b></Link>
                    </div>
                    <div className={styles.icon_details}>
                      <BsCameraVideoFill className={styles.cameraVideo} />
                      <BsCameraFill className={styles.cameraFill} />
                      <span className={styles.number}>5</span>
                    </div>
                  </div>

                  <div className={styles.info_container}>
                    <h3>{apartment.location} </h3>
                    <h4>{apartment.price} $</h4>
                    <p>{apartment.description.slice(0, 130) + "..."}</p>
                    <div className={styles.icons}>
                      <span>
                        <MdOutlineBedroomParent /> {apartment.bedroom}
                      </span>
                      <span>
                        <BiBath /> {apartment.bathroom}
                      </span>
                      <span>
                        <TbLayoutBoard /> {apartment.size} ft<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <div className={styles.agentInfo_canteiner}>
                    <div className={styles.agent_photo_name}>
                      <img
                        src="https://lasvegas.wpresidence.net/wp-content/uploads/2014/05/person3-27-120x120.jpg')"
                        alt="agent_photo"
                      />
                      <span>Michelle Upsetovna</span>
                    </div>
                    <div className={styles.agent_icons}>
                      <span>
                        <BsFillShareFill />
                      </span>
                      <span>
                        <BsSuitHeart />
                      </span>
                      <span>
                        <FiPlus />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
      <div className={styles.button_container}>
        {limit >= apartments.length ? (
          <button onClick={handleHide}>Hide listings</button>
        ) : (
          <button onClick={handleShow}>Load more listings</button>
        )}
      </div>
    </>
  );
};

export default CardApartment;