import {FaUserAlt as IconUser} from 'react-icons/fa';
import {RiWhatsappFill as IconWhats} from 'react-icons/ri';
import {FaMapMarkedAlt as IconMap} from 'react-icons/fa';

import { 
    Container,
    Title,
    Legenda,
    Content,
    BoxsContent,
    TextContent
} from "./styles";

interface Props{
    title: string;
    lider: string;
    phone?: string;
    local: string;
    link: string;
}

export function BoxEmbaixada({
    title,
    lider,
    phone,
    local,
    link
}: Props){

    const what = !!phone;
    return(
        <Container>
            <Title className='titlebox-emb'>{title}</Title>
            <Legenda>Linder de Embaixada</Legenda>
            <Content>
                <BoxsContent>
                    <IconUser className='icon-boxs'/>
                    <TextContent>{lider}</TextContent>
                </BoxsContent>
                {
                    phone ? <BoxsContent>
                                <IconWhats className='icon-boxs'/>
                                <TextContent>
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </TextContent>
                            </BoxsContent>
                    : ""
                }
                <BoxsContent whats={what}>
                    <IconMap className='icon-boxs'/>
                    <TextContent>
                        <a href={link} target='blank' >{local}</a>
                    </TextContent>
                </BoxsContent>
            </Content>
        </Container>
    )
}