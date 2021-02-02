import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Folder({ folder }) {
    return (
        <Button variant="outline-dark" className="text-truncate w-100" as={Link} to={`/folder/${folder.id}`}>
            <FontAwesomeIcon icon={faFolder} className="mr-2" />
            {folder.name}
        </Button>
    )
}
