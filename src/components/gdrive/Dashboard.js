import React from 'react'
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import { useFolder } from '../../hooks/useFolder'

export default function Dashboard() {
    const { folder } = useFolder("K2tdfLdyaRjiQmxgHEkf")
    // 43.06
    return (
        <div>
            <Navbar />
            <Container className="mt-3">
                <AddFolderButton currentFolder={folder}/>
            </Container>
        </div>
    )
}
