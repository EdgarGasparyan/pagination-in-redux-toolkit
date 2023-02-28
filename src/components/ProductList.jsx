import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../Redux/ProductSlice";

const ProductList = () => {
  //  const [ProductDate, setProductDate] = useState([]);
  const [page, setPage] = useState(0);
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const limit = 10;

  //  const getData = async () => {
  //    try {
  //      const resp = await axios.get(
  //        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
  //      );
  //      setProductDate(resp.data);
  //    } catch (err) {
  //      console.error(err);
  //    }
  //  };

  //  useEffect(() => {
  //    getData();
  //  }, [page]);

  //  const state = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(page));
  }, [page]);

  console.log(product);

  return (
    <>
      <ProductItem product={product.products} />

      <div className="d-flex justify-content-center align-items-center mt-4">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(product.total / limit)}
          marginPagesDisplayed={product.total / limit}
          pageRangeDisplayed={10}
          onPageChange={(e) => {
            setPage(e.selected);
          }}
          forcePage={page}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          activeClassName={"active"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
        />
      </div>
    </>
  );
};

export default ProductList;
