export default {
    ELEMENT_NODE: 1,//代表元素
    ATTRIBUTE_NODE:2,//代表属性
    TEXT_NODE:3,//代表元素或属性中的文本内容
    CDATA_SECTION_NODE:4,//代表文档中的 CDATA 部分（不会由解析器解析的文本）。
    ENTITY_REFERENCE_NODE:5,//代表实体引用。
    ENTITY_NODE:6,//代表实体。
    PROCESSING_INSTRUCTION_NODE:7,//代表处理指令。
    COMMENT_NODE:8,//代表注释。
    DOCUMENT_NODE:9,//代表整个文档（DOM 树的根节点）。
    DOCUMENT_TYPE_NODE:10,//向为文档定义的实体提供接口
    DOCUMENT_FRAGMENT_NODE:11,//代表轻量级的 Document 对象，能够容纳文档的某个部分
    NOTATION_NODE:12,//代表 DTD 中声明的符号。
}