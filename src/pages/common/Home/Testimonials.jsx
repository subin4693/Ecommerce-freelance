import React, { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="mb-10">
      {" "}
      <h2 className="text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#d6b4d7] via-[#7ca9af] to-[#918ba7] bg-clip-text text-transparent mb-6">
        Testimonials
      </h2>
      <div className="mt-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center  ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="testimonials_cards1 "
        >
          <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
          <p>
            Not happy? Return it easily and get a refund quickly. No worries, no
            stress.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="testimonials_cards2"
        >
          <h3 className="font-bold text-lg mb-2">Wide Variety</h3>
          <p>
            From toys to dresses and sweet treats – endless fun for your little
            ones!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="testimonials_cards3"
        >
          <h3 className="font-bold text-lg mb-2">Best Deals</h3>
          <p>
            Affordable prices and exciting offers for the perfect shopping
            spree!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="testimonials_cards4"
        >
          <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
          <p>
            Get your children's favorites delivered to your doorstep in no time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
