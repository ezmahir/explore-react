import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);
    const handleAddPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemovePlayer = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }
    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '20px',
        margin: '15px'
    }
    return (
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}