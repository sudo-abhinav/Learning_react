// import React from 'react'

import PropTypes from "prop-types";

/*  this is ths basic syntax where i am pasing not provided in description bcoz when prop is not provided 
 by parant then this thing is default value */

function Card({ name, position, description = "Not Provided" }) {
  Card.propTypes = {
    /*propType using for checking the proptype is correct or not given by parent , PropTypesy a static code analysis tool, is configured to enforce prop type validation in your React components. It detects that the description prop is being used in your component, but there's no corresponding validation defined for it using PropTypes from the prop-types package */
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, // Required string
  };
  // let userData = props
  //   console.log(name , position , description);

  return (
    // <>
    <div className="relative h-[400px] w-[300px] rounded-md  mt-4">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <h5 className="text-sm font-mono text-white">{position}</h5>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
    </div>
    // </>
  );
}

export default Card;
