import { StyleSheet } from "react-native"

const VERMELHO = "#FF0000"
const AMARELO = "#FFC107"
const AZUL = "#0072CE"
const TEXTO = "#241019"
const FUNDO = "#FFF6E5"
const FONTE_TITULO = "Bungee_400Regular"
const FONTE_CORPO = "Quicksand_700Bold"

export default StyleSheet.create({
    containerBase: {
        flex: 1,
        backgroundColor: FUNDO
    },
    Rolagem: {
        flexGrow: 1,
        alignItems: "center",
        padding: 16
    },
    Faixa: {
        flexDirection: "row",
        width: "100%",
        height: 40
    },
    Titulo: {
        fontSize: 26,
        fontFamily: FONTE_TITULO,
        color: VERMELHO,
        textAlign: "center",
        marginVertical: 12,
        letterSpacing: 1
    },
    RotuloSinopse: {
        fontSize: 12,
        fontFamily: FONTE_TITULO,
        color: AZUL,
        letterSpacing: 2,
        marginBottom: 6
    },
    Subtitulo: {
        fontSize: 17,
        fontFamily: FONTE_CORPO,
        color: TEXTO,
        textAlign: "center",
        marginBottom: 16,
        lineHeight: 24
    },
    Circulo: {
        backgroundColor: VERMELHO,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderColor: AMARELO,
        marginTop: 8
    },
    Aviso: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF1CF",
        borderWidth: 2,
        borderColor: AMARELO,
        borderStyle: "dashed",
        borderRadius: 12,
        padding: 12,
        marginTop: 16,
        width: "100%",
        maxWidth: 500
    },
    AvisoTexto: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        fontFamily: FONTE_CORPO,
        color: TEXTO
    },
    AvisoEmoji: {
        fontSize: 26
    },
    Card: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        maxWidth: 500,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 12,
        marginBottom: 14,
        borderWidth: 2,
        borderColor: AZUL
    },
    CardEmoji: {
        width: 84,
        height: 84,
        borderRadius: 42,
        backgroundColor: VERMELHO,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
        borderWidth: 3,
        borderColor: AMARELO
    },
    CardEmojiTexto: {
        fontSize: 34
    },
    CardImagemBase: {
        width: 84,
        height: 84,
        borderRadius: 42,
        marginRight: 12,
        borderWidth: 3,
        borderColor: AMARELO,
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    CardImagem: {
        width: "100%",
        height: "100%"
    },
    CardConteudo: {
        flex: 1
    },
    CardTag: {
        fontSize: 11,
        fontFamily: FONTE_CORPO,
        color: "#FFFFFF",
        backgroundColor: AZUL,
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
        marginBottom: 4,
        overflow: "hidden"
    },
    CardTitulo: {
        fontSize: 19,
        fontFamily: FONTE_TITULO,
        color: VERMELHO
    },
    CardTexto: {
        fontSize: 14,
        fontFamily: FONTE_CORPO,
        color: TEXTO,
        marginTop: 4,
        lineHeight: 20
    },
    Botao: {
        backgroundColor: VERMELHO,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 30,
        marginTop: 10,
        width: "100%",
        maxWidth: 500,
        alignItems: "center",
        borderWidth: 3,
        borderColor: AMARELO
    },
    BotaoTexto: {
        color: "#FFFFFF",
        fontSize: 15,
        fontFamily: FONTE_TITULO,
        letterSpacing: 1
    }
})