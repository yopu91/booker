import { useEffect, useState } from 'react';
import api from '../api';

function BookmarkTable() {
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await api.BookmarkAPI.getAll();
      setBookmarkList(data);
    };
    loadData();
  }, []);

  let bookmarkRows = bookmarkList.map((bl) => {
    return (
      <tr className="border" key={`bookmark-table-row-${bl.id}`}>
        <td className="pt-1 pl-1">{bl.link}</td>
        <td className="pt-1 pl-1">{bl.note}</td>
        <td className="pt-1 pl-1">{bl.createdAt}</td>
      </tr>
    );
  });
  return (
    <table className="border border-spacing-5 border-slate-400 shadow-sm min-w-full mt-2">
      <thead className="text-left bg-slate-500 ">
        <tr>
          <th className="pt-1 pl-1">Link</th>
          <th className="pt-1 pl-1">Note</th>
          <th className="pt-1 pl-1">Created</th>
        </tr>
      </thead>
      <tbody>{bookmarkRows}</tbody>
    </table>
  );
}

export { BookmarkTable };
