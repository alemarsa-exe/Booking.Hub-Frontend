import { faSearch, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

//DatePicker
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

const Header = ({ type }) => {
	const [startDate, setStartDate] = useState(
		setHours(setMinutes(new Date(), 0), 7)
	);

	return (
		<div className="header">
			<div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
				<div className="headerList"></div>

				{type !== "list" && (
					<>
						<h1 className="headerTitle">
							Bienvenido, aquí encontrarás todos nuestros recursos
						</h1>
						<p className="headerDesc">
							Para reservar recursos, debes estar registrado
						</p>
						<button className="headerBtn">Iniciar Sesión</button>{" "}
					</>
				)}
				<div className="headerSearch">
					<div className="headerSearchItem">
						<FontAwesomeIcon
							icon={faSearch}
							className="headerIcon"
						/>
						<input
							type="text"
							placeholder="¿Qué quieres reservar?"
							className="headerSearchInput"
						/>
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon
							icon={faCalendarDays}
							className="headerIcon"
						/>
						<span className="headerSearchText"></span>

						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							showTimeSelect
							minTime={setHours(setMinutes(new Date(), 0), 7)}
							maxTime={setHours(setMinutes(new Date(), 0), 20)}
							dateFormat="MMMM d, yyyy h:mm aa"
							className="date"
						/>
					</div>
					<div className="headerSearchItem">
						<button className="SearchBtn">Buscar</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
