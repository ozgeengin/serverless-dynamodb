'use strict';


const AWS = require('aws-sdk');

const db = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.DYNAMODB_TABLE;


module.exports.saveItem = item => {
    const params = {
        TableName: TABLE_NAME,
        Item: item
    };

    return db.put(params).promise().then(() => {
        return item.itemId;
    });
};

module.exports.getItem = itemId => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            itemId: itemId
        }
    };

    return db.get(params).promise().then(result => {
        return result.Item;
    });
};

module.exports.getAllItems = () => {
    const params = {
        TableName: TABLE_NAME,
        ProjectionExpression: "itemId, username, nickname"
    };

    return db.scan(params).promise().then(result => {
        return result.Items;
    });
};

module.exports.deleteItem = itemId => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            itemId: itemId
        }
    };

    return db.delete(params).promise();
};

module.exports.updateItem = (itemId, paramName, paramValue) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            itemId: itemId
        },
        UpdateExpression: 'set ' + paramName + ' = :v',
        ExpressionAttributeValues: {
            ':v': paramValue
        },
        ReturnValues: 'ALL_NEW'
    };

    return db.update(params).promise().then(response => {
        return response.Attributes;
    });
};