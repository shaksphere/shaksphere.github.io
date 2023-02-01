import { useNavigate } from "react-router-dom";

function NavigateButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(member.pagepath);
  }

  return (
    <button type="button" onClick={handleClick}>
      Go to Page
    </button>
  );
}