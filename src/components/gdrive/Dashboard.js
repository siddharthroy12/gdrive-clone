import React from 'react'
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import FolderBreadCrumbs from './FolderBreadCrumbs'
import { useFolder } from '../../hooks/useFolder'
import Folder from './Folder'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom' 
import { useAuth } from '../../context/AuthContext'

export default function Dashboard() {
    const { currentUser } = useAuth()
    const history = useHistory()

    if (!currentUser) {
        history.push('/login')
    }

    const { folderId } = useParams()
    const { folder, childFolders } = useFolder(folderId)
    


    return (
        <div>
            <Navbar />
            <Container fluid className="mt-3">
                <div className="d-flex align-items-center">
                    <FolderBreadCrumbs currentFolder={folder} />
                    <AddFolderButton currentFolder={folder}/>
                </div>
                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap mt-3">
                        {childFolders.map(childFolder => (
                            <div key={childFolder.id} style={{maxWidth: '250px'}}
                                className='p2 m-1'>
                                    <Folder folder={childFolder}/>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}
