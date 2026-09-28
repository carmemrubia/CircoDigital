import React from "react"
import { View, Text, Image } from "react-native"
import Estilo from "./Estilo"

export default Comp => {
    return (
        <View style={Estilo.Card}>
            {Comp.imagem
                ? <View style={Estilo.CardImagemBase}>
                    <Image source={Comp.imagem} style={Estilo.CardImagem} resizeMode="contain" />
                </View>
                : <View style={Estilo.CardEmoji}>
                    <Text style={Estilo.CardEmojiTexto}>{Comp.emoji}</Text>
                </View>
            }
            <View style={Estilo.CardConteudo}>
                {Comp.tag ? <Text style={Estilo.CardTag}>{Comp.tag}</Text> : null}
                <Text style={Estilo.CardTitulo}>{Comp.nome}</Text>
                <Text style={Estilo.CardTexto}>{Comp.texto}</Text>
            </View>
        </View>
    )
}