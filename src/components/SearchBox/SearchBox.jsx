import s from "./SearchBox.module.css";

const SearchBox = ({ value }) => {
  return (
    <div className={s.searchBox}>
      <label className={s.searchLabel}>
        Find contacts by name
        <input
          className={s.searchInput}
          type="text"
          placeholder=""
          value={value}
        />
      </label>
    </div>
  );
};

export default SearchBox;
