import React from 'react';
import styles from "./SearchMap.module.css"
import Link from "next/link";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { TbLayoutBoard } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Apartments = ({filteredArr}) => {
    return (
        <>
           {filteredArr.map((apartment, index) => {
              return (
                <div className={styles.card} key={apartment._id}>
                  <Link href={`/property/${apartment._id}`}>
                    <div className={styles.img_container}>
                      <img src={apartment.image[0]} alt="apartment photo" />
                    </div>
                  </Link>
                  <div className={styles.info_container}>
                    <h3>{apartment.location} </h3>
                    <h4>{apartment.price} $</h4>
                    <p>{apartment.description.slice(0, 130) + "..."}</p>
                    <div className={styles.icons}>
                      <span>
                        <MdOutlineBedroomParent /> {apartment.bedroom}
                      </span>
                      <span>
                        <GiBathtub /> {apartment.bathroom}
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
              );
            })}
        </>
           );
};

export default Apartments;