import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ItemSidebar, RelatedPost } from "../../components";
import { List, Pagination } from "../../containers/Public";

function SearchDetail() {
  const { prices, areas } = useSelector((state) => state.app);
  const location = useLocation();
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">
          {location.state?.titleSearch || "Kết quả tiềm kiếm"}
        </h1>
        <p className="text-base text-gray-700">{`${location.state?.titleSearch || ""} 
        phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu an ninh.`}</p>
      </div>
      <div className="w-full flex gap-4">
        <section className="w-[70%]">
          <List />
          <Pagination />
        </section>
        <aside className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSidebar isDouble type="priceCode" content={prices} title="Xem theo giá" />
          <ItemSidebar isDouble type="areaCode" content={areas} title="Xem theo diện tích" />
          <RelatedPost />
        </aside>
      </div>
    </div>
  );
}

export default SearchDetail;
