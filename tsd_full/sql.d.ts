/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="widgets.d.ts" />
declare namespace sql {
	interface QSql_ITF {
		QSql_PTR():QSql;
	}

	class QSql {
		___pointer: number;
		QSql_PTR():QSql;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSql():void;
	}
	function NewQSqlFromPointer(ptr:number):QSql;
	const QSql__BeforeFirstRow: number;
	const QSql__AfterLastRow: number;
	const QSql__LowPrecisionInt32: number;
	const QSql__LowPrecisionInt64: number;
	const QSql__LowPrecisionDouble: number;
	const QSql__HighPrecision: number;
	const QSql__In: number;
	const QSql__Out: number;
	const QSql__InOut: number;
	const QSql__Binary: number;
	const QSql__Tables: number;
	const QSql__SystemTables: number;
	const QSql__Views: number;
	const QSql__AllTables: number;
	interface QSqlDatabase_ITF {
		QSqlDatabase_PTR():QSqlDatabase;
	}

	class QSqlDatabase {
		___pointer: number;
		QSqlDatabase_PTR():QSqlDatabase;
		Pointer():number;
		SetPointer(p:number):void;
		AddDatabase(ty:string,connectionName:string):QSqlDatabase;
		AddDatabase2(driver:QSqlDriver_ITF,connectionName:string):QSqlDatabase;
		CloneDatabase(other:QSqlDatabase_ITF,connectionName:string):QSqlDatabase;
		CloneDatabase2(other:string,connectionName:string):QSqlDatabase;
		Close():void;
		Commit():boolean;
		ConnectOptions():string;
		ConnectionName():string;
		ConnectionNames():string[];
		Contains(connectionName:string):boolean;
		Database(connectionName:string,open:boolean):QSqlDatabase;
		DatabaseName():string;
		Driver():QSqlDriver;
		DriverName():string;
		Drivers():string[];
		Exec(query:string):QSqlQuery;
		HostName():string;
		IsDriverAvailable(name:string):boolean;
		IsOpen():boolean;
		IsOpenError():boolean;
		IsValid():boolean;
		LastError():QSqlError;
		NumericalPrecisionPolicy():number;
		Open():boolean;
		Open2(user:string,password:string):boolean;
		Password():string;
		Port():number;
		PrimaryIndex(tablename:string):QSqlIndex;
		Record(tablename:string):QSqlRecord;
		RegisterSqlDriver(name:string,creator:QSqlDriverCreatorBase_ITF):void;
		RemoveDatabase(connectionName:string):void;
		Rollback():boolean;
		SetConnectOptions(options:string):void;
		SetDatabaseName(name:string):void;
		SetHostName(host:string):void;
		SetNumericalPrecisionPolicy(precisionPolicy:number):void;
		SetPassword(password:string):void;
		SetPort(port:number):void;
		SetUserName(name:string):void;
		Tables(ty:number):string[];
		Transaction():boolean;
		UserName():string;
		DestroyQSqlDatabase():void;
	}
	function NewQSqlDatabaseFromPointer(ptr:number):QSqlDatabase;
	function NewQSqlDatabase():QSqlDatabase;
	function NewQSqlDatabase2(other:QSqlDatabase_ITF):QSqlDatabase;
	function NewQSqlDatabase3(ty:string):QSqlDatabase;
	function NewQSqlDatabase4(driver:QSqlDriver_ITF):QSqlDatabase;
	function QSqlDatabase_AddDatabase(ty:string,connectionName:string):QSqlDatabase;
	function QSqlDatabase_AddDatabase2(driver:QSqlDriver_ITF,connectionName:string):QSqlDatabase;
	function QSqlDatabase_CloneDatabase(other:QSqlDatabase_ITF,connectionName:string):QSqlDatabase;
	function QSqlDatabase_CloneDatabase2(other:string,connectionName:string):QSqlDatabase;
	function QSqlDatabase_ConnectionNames():string[];
	function QSqlDatabase_Contains(connectionName:string):boolean;
	function QSqlDatabase_Database(connectionName:string,open:boolean):QSqlDatabase;
	function QSqlDatabase_Drivers():string[];
	function QSqlDatabase_IsDriverAvailable(name:string):boolean;
	function QSqlDatabase_RegisterSqlDriver(name:string,creator:QSqlDriverCreatorBase_ITF):void;
	function QSqlDatabase_RemoveDatabase(connectionName:string):void;
	interface QSqlDriver_ITF extends core.QObject_ITF {
		QSqlDriver_PTR():QSqlDriver;
	}

	class QSqlDriver extends core.QObject {
		___pointer: number;
		QSqlDriver_PTR():QSqlDriver;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBeginTransaction(f:()=>boolean):void;
		DisconnectBeginTransaction():void;
		BeginTransaction():boolean;
		BeginTransactionDefault():boolean;
		ConnectClose(f:()=>void):void;
		DisconnectClose():void;
		Close():void;
		ConnectCommitTransaction(f:()=>boolean):void;
		DisconnectCommitTransaction():void;
		CommitTransaction():boolean;
		CommitTransactionDefault():boolean;
		ConnectCreateResult(f:()=>QSqlResult):void;
		DisconnectCreateResult():void;
		CreateResult():QSqlResult;
		ConnectEscapeIdentifier(f:(identifier:string,ty:number)=>string):void;
		DisconnectEscapeIdentifier():void;
		EscapeIdentifier(identifier:string,ty:number):string;
		EscapeIdentifierDefault(identifier:string,ty:number):string;
		ConnectFormatValue(f:(field:QSqlField,trimStrings:boolean)=>string):void;
		DisconnectFormatValue():void;
		FormatValue(field:QSqlField_ITF,trimStrings:boolean):string;
		FormatValueDefault(field:QSqlField_ITF,trimStrings:boolean):string;
		ConnectHandle(f:()=>core.QVariant):void;
		DisconnectHandle():void;
		Handle():core.QVariant;
		HandleDefault():core.QVariant;
		ConnectHasFeature(f:(feature:number)=>boolean):void;
		DisconnectHasFeature():void;
		HasFeature(feature:number):boolean;
		ConnectIsIdentifierEscaped(f:(identifier:string,ty:number)=>boolean):void;
		DisconnectIsIdentifierEscaped():void;
		IsIdentifierEscaped(identifier:string,ty:number):boolean;
		IsIdentifierEscapedDefault(identifier:string,ty:number):boolean;
		ConnectIsOpen(f:()=>boolean):void;
		DisconnectIsOpen():void;
		IsOpen():boolean;
		IsOpenDefault():boolean;
		IsOpenError():boolean;
		LastError():QSqlError;
		ConnectNotification(f:(name:string)=>void):void;
		DisconnectNotification():void;
		Notification(name:string):void;
		ConnectNotification2(f:(name:string,source:number,payload:core.QVariant)=>void):void;
		DisconnectNotification2():void;
		Notification2(name:string,source:number,payload:core.QVariant_ITF):void;
		NumericalPrecisionPolicy():number;
		ConnectOpen(f:(db:string,user:string,password:string,host:string,port:number,options:string)=>boolean):void;
		DisconnectOpen():void;
		Open(db:string,user:string,password:string,host:string,port:number,options:string):boolean;
		ConnectPrimaryIndex(f:(tableName:string)=>QSqlIndex):void;
		DisconnectPrimaryIndex():void;
		PrimaryIndex(tableName:string):QSqlIndex;
		PrimaryIndexDefault(tableName:string):QSqlIndex;
		ConnectRecord(f:(tableName:string)=>QSqlRecord):void;
		DisconnectRecord():void;
		Record(tableName:string):QSqlRecord;
		RecordDefault(tableName:string):QSqlRecord;
		ConnectRollbackTransaction(f:()=>boolean):void;
		DisconnectRollbackTransaction():void;
		RollbackTransaction():boolean;
		RollbackTransactionDefault():boolean;
		ConnectSetLastError(f:(error:QSqlError)=>void):void;
		DisconnectSetLastError():void;
		SetLastError(error:QSqlError_ITF):void;
		SetLastErrorDefault(error:QSqlError_ITF):void;
		SetNumericalPrecisionPolicy(precisionPolicy:number):void;
		ConnectSetOpen(f:(open:boolean)=>void):void;
		DisconnectSetOpen():void;
		SetOpen(open:boolean):void;
		SetOpenDefault(open:boolean):void;
		ConnectSetOpenError(f:(error:boolean)=>void):void;
		DisconnectSetOpenError():void;
		SetOpenError(error:boolean):void;
		SetOpenErrorDefault(error:boolean):void;
		ConnectSqlStatement(f:(ty:number,tableName:string,rec:QSqlRecord,preparedStatement:boolean)=>string):void;
		DisconnectSqlStatement():void;
		SqlStatement(ty:number,tableName:string,rec:QSqlRecord_ITF,preparedStatement:boolean):string;
		SqlStatementDefault(ty:number,tableName:string,rec:QSqlRecord_ITF,preparedStatement:boolean):string;
		ConnectStripDelimiters(f:(identifier:string,ty:number)=>string):void;
		DisconnectStripDelimiters():void;
		StripDelimiters(identifier:string,ty:number):string;
		StripDelimitersDefault(identifier:string,ty:number):string;
		ConnectSubscribeToNotification(f:(name:string)=>boolean):void;
		DisconnectSubscribeToNotification():void;
		SubscribeToNotification(name:string):boolean;
		SubscribeToNotificationDefault(name:string):boolean;
		ConnectSubscribedToNotifications(f:()=>string[]):void;
		DisconnectSubscribedToNotifications():void;
		SubscribedToNotifications():string[];
		SubscribedToNotificationsDefault():string[];
		ConnectTables(f:(tableType:number)=>string[]):void;
		DisconnectTables():void;
		Tables(tableType:number):string[];
		TablesDefault(tableType:number):string[];
		ConnectUnsubscribeFromNotification(f:(name:string)=>boolean):void;
		DisconnectUnsubscribeFromNotification():void;
		UnsubscribeFromNotification(name:string):boolean;
		UnsubscribeFromNotificationDefault(name:string):boolean;
		ConnectDestroyQSqlDriver(f:()=>void):void;
		DisconnectDestroyQSqlDriver():void;
		DestroyQSqlDriver():void;
		DestroyQSqlDriverDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSqlDriverFromPointer(ptr:number):QSqlDriver;
	function NewQSqlDriver(parent:core.QObject_ITF):QSqlDriver;
	const QSqlDriver__Transactions: number;
	const QSqlDriver__QuerySize: number;
	const QSqlDriver__BLOB: number;
	const QSqlDriver__Unicode: number;
	const QSqlDriver__PreparedQueries: number;
	const QSqlDriver__NamedPlaceholders: number;
	const QSqlDriver__PositionalPlaceholders: number;
	const QSqlDriver__LastInsertId: number;
	const QSqlDriver__BatchOperations: number;
	const QSqlDriver__SimpleLocking: number;
	const QSqlDriver__LowPrecisionNumbers: number;
	const QSqlDriver__EventNotifications: number;
	const QSqlDriver__FinishQuery: number;
	const QSqlDriver__MultipleResultSets: number;
	const QSqlDriver__CancelQuery: number;
	const QSqlDriver__WhereStatement: number;
	const QSqlDriver__SelectStatement: number;
	const QSqlDriver__UpdateStatement: number;
	const QSqlDriver__InsertStatement: number;
	const QSqlDriver__DeleteStatement: number;
	const QSqlDriver__FieldName: number;
	const QSqlDriver__TableName: number;
	const QSqlDriver__UnknownSource: number;
	const QSqlDriver__SelfSource: number;
	const QSqlDriver__OtherSource: number;
	interface QSqlDriverCreator_ITF extends QSqlDriverCreatorBase_ITF {
		QSqlDriverCreator_PTR():QSqlDriverCreator;
	}

	class QSqlDriverCreator extends QSqlDriverCreatorBase {
		___pointer: number;
		QSqlDriverCreator_PTR():QSqlDriverCreator;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSqlDriverCreator():void;
	}
	interface QSqlDriverCreatorBase_ITF {
		QSqlDriverCreatorBase_PTR():QSqlDriverCreatorBase;
	}

	class QSqlDriverCreatorBase {
		___pointer: number;
		QSqlDriverCreatorBase_PTR():QSqlDriverCreatorBase;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreateObject(f:()=>QSqlDriver):void;
		DisconnectCreateObject():void;
		CreateObject():QSqlDriver;
		ConnectDestroyQSqlDriverCreatorBase(f:()=>void):void;
		DisconnectDestroyQSqlDriverCreatorBase():void;
		DestroyQSqlDriverCreatorBase():void;
		DestroyQSqlDriverCreatorBaseDefault():void;
	}
	function NewQSqlDriverCreatorBaseFromPointer(ptr:number):QSqlDriverCreatorBase;
	interface QSqlDriverPlugin_ITF extends core.QObject_ITF {
		QSqlDriverPlugin_PTR():QSqlDriverPlugin;
	}

	class QSqlDriverPlugin extends core.QObject {
		___pointer: number;
		QSqlDriverPlugin_PTR():QSqlDriverPlugin;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreate(f:(key:string)=>QSqlDriver):void;
		DisconnectCreate():void;
		Create(key:string):QSqlDriver;
		ConnectDestroyQSqlDriverPlugin(f:()=>void):void;
		DisconnectDestroyQSqlDriverPlugin():void;
		DestroyQSqlDriverPlugin():void;
		DestroyQSqlDriverPluginDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSqlDriverPluginFromPointer(ptr:number):QSqlDriverPlugin;
	function NewQSqlDriverPlugin(parent:core.QObject_ITF):QSqlDriverPlugin;
	interface QSqlError_ITF {
		QSqlError_PTR():QSqlError;
	}

	class QSqlError {
		___pointer: number;
		QSqlError_PTR():QSqlError;
		Pointer():number;
		SetPointer(p:number):void;
		DatabaseText():string;
		DriverText():string;
		IsValid():boolean;
		NativeErrorCode():string;
		Swap(other:QSqlError_ITF):void;
		Text():string;
		Type():number;
		DestroyQSqlError():void;
	}
	function NewQSqlErrorFromPointer(ptr:number):QSqlError;
	function NewQSqlError2(driverText:string,databaseText:string,ty:number,code:string):QSqlError;
	function NewQSqlError3(other:QSqlError_ITF):QSqlError;
	function NewQSqlError4(other:QSqlError_ITF):QSqlError;
	const QSqlError__NoError: number;
	const QSqlError__ConnectionError: number;
	const QSqlError__StatementError: number;
	const QSqlError__TransactionError: number;
	const QSqlError__UnknownError: number;
	interface QSqlField_ITF {
		QSqlField_PTR():QSqlField;
	}

	class QSqlField {
		___pointer: number;
		QSqlField_PTR():QSqlField;
		Pointer():number;
		SetPointer(p:number):void;
		Clear():void;
		DefaultValue():core.QVariant;
		IsAutoValue():boolean;
		IsGenerated():boolean;
		IsNull():boolean;
		IsReadOnly():boolean;
		IsValid():boolean;
		Length():number;
		Name():string;
		Precision():number;
		RequiredStatus():number;
		SetAutoValue(autoVal:boolean):void;
		SetDefaultValue(value:core.QVariant_ITF):void;
		SetGenerated(gen:boolean):void;
		SetLength(fieldLength:number):void;
		SetName(name:string):void;
		SetPrecision(precision:number):void;
		SetReadOnly(readOnly:boolean):void;
		SetRequired(required:boolean):void;
		SetRequiredStatus(required:number):void;
		SetTableName(table:string):void;
		SetType(ty:number):void;
		SetValue(value:core.QVariant_ITF):void;
		TableName():string;
		Type():number;
		Value():core.QVariant;
		DestroyQSqlField():void;
	}
	function NewQSqlFieldFromPointer(ptr:number):QSqlField;
	function NewQSqlField(fieldName:string,ty:number):QSqlField;
	function NewQSqlField2(fieldName:string,ty:number,table:string):QSqlField;
	function NewQSqlField3(other:QSqlField_ITF):QSqlField;
	const QSqlField__Unknown: number;
	const QSqlField__Optional: number;
	const QSqlField__Required: number;
	interface QSqlIndex_ITF extends QSqlRecord_ITF {
		QSqlIndex_PTR():QSqlIndex;
	}

	class QSqlIndex extends QSqlRecord {
		___pointer: number;
		QSqlIndex_PTR():QSqlIndex;
		Pointer():number;
		SetPointer(p:number):void;
		Append2(field:QSqlField_ITF,desc:boolean):void;
		CursorName():string;
		IsDescending(i:number):boolean;
		Name():string;
		SetCursorName(cursorName:string):void;
		SetDescending(i:number,desc:boolean):void;
		SetName(name:string):void;
		DestroyQSqlIndex():void;
	}
	function NewQSqlIndexFromPointer(ptr:number):QSqlIndex;
	function NewQSqlIndex(cursorname:string,name:string):QSqlIndex;
	function NewQSqlIndex2(other:QSqlIndex_ITF):QSqlIndex;
	interface QSqlQuery_ITF {
		QSqlQuery_PTR():QSqlQuery;
	}

	class QSqlQuery {
		___pointer: number;
		QSqlQuery_PTR():QSqlQuery;
		Pointer():number;
		SetPointer(p:number):void;
		AddBindValue(val:core.QVariant_ITF,paramType:number):void;
		At():number;
		BindValue(placeholder:string,val:core.QVariant_ITF,paramType:number):void;
		BindValue2(pos:number,val:core.QVariant_ITF,paramType:number):void;
		BoundValue(placeholder:string):core.QVariant;
		BoundValue2(pos:number):core.QVariant;
		BoundValues():Map<string,core.QVariant>;
		Clear():void;
		Driver():QSqlDriver;
		Exec(query:string):boolean;
		Exec2():boolean;
		ExecBatch(mode:number):boolean;
		ExecutedQuery():string;
		Finish():void;
		First():boolean;
		IsActive():boolean;
		IsForwardOnly():boolean;
		IsNull(field:number):boolean;
		IsNull2(name:string):boolean;
		IsSelect():boolean;
		IsValid():boolean;
		Last():boolean;
		LastError():QSqlError;
		LastInsertId():core.QVariant;
		LastQuery():string;
		Next():boolean;
		NextResult():boolean;
		NumRowsAffected():number;
		NumericalPrecisionPolicy():number;
		Prepare(query:string):boolean;
		Previous():boolean;
		Record():QSqlRecord;
		Result():QSqlResult;
		Seek(index:number,relative:boolean):boolean;
		SetForwardOnly(forward:boolean):void;
		SetNumericalPrecisionPolicy(precisionPolicy:number):void;
		Size():number;
		Value(index:number):core.QVariant;
		Value2(name:string):core.QVariant;
		DestroyQSqlQuery():void;
	}
	function NewQSqlQueryFromPointer(ptr:number):QSqlQuery;
	function NewQSqlQuery(result:QSqlResult_ITF):QSqlQuery;
	function NewQSqlQuery2(query:string,db:QSqlDatabase_ITF):QSqlQuery;
	function NewQSqlQuery3(db:QSqlDatabase_ITF):QSqlQuery;
	function NewQSqlQuery4(other:QSqlQuery_ITF):QSqlQuery;
	const QSqlQuery__ValuesAsRows: number;
	const QSqlQuery__ValuesAsColumns: number;
	interface QSqlQueryModel_ITF extends core.QAbstractTableModel_ITF {
		QSqlQueryModel_PTR():QSqlQueryModel;
	}

	class QSqlQueryModel extends core.QAbstractTableModel {
		___pointer: number;
		QSqlQueryModel_PTR():QSqlQueryModel;
		Pointer():number;
		SetPointer(p:number):void;
		CanFetchMoreDefault(parent:core.QModelIndex_ITF):boolean;
		ConnectClear(f:()=>void):void;
		DisconnectClear():void;
		Clear():void;
		ClearDefault():void;
		ConnectColumnCount(f:(index:core.QModelIndex)=>number):void;
		DisconnectColumnCount():void;
		ColumnCount(index:core.QModelIndex_ITF):number;
		ColumnCountDefault(index:core.QModelIndex_ITF):number;
		ConnectData(f:(item:core.QModelIndex,role:number)=>core.QVariant):void;
		DisconnectData():void;
		Data(item:core.QModelIndex_ITF,role:number):core.QVariant;
		DataDefault(item:core.QModelIndex_ITF,role:number):core.QVariant;
		FetchMoreDefault(parent:core.QModelIndex_ITF):void;
		HeaderDataDefault(section:number,orientation:number,role:number):core.QVariant;
		ConnectIndexInQuery(f:(item:core.QModelIndex)=>core.QModelIndex):void;
		DisconnectIndexInQuery():void;
		IndexInQuery(item:core.QModelIndex_ITF):core.QModelIndex;
		IndexInQueryDefault(item:core.QModelIndex_ITF):core.QModelIndex;
		InsertColumnsDefault(column:number,count:number,parent:core.QModelIndex_ITF):boolean;
		LastError():QSqlError;
		Query():QSqlQuery;
		ConnectQueryChange(f:()=>void):void;
		DisconnectQueryChange():void;
		QueryChange():void;
		QueryChangeDefault():void;
		Record(row:number):QSqlRecord;
		Record2():QSqlRecord;
		RemoveColumnsDefault(column:number,count:number,parent:core.QModelIndex_ITF):boolean;
		RoleNamesDefault():Map<number,core.QByteArray>;
		ConnectRowCount(f:(parent:core.QModelIndex)=>number):void;
		DisconnectRowCount():void;
		RowCount(parent:core.QModelIndex_ITF):number;
		RowCountDefault(parent:core.QModelIndex_ITF):number;
		SetHeaderDataDefault(section:number,orientation:number,value:core.QVariant_ITF,role:number):boolean;
		SetLastError(error:QSqlError_ITF):void;
		SetQuery(query:QSqlQuery_ITF):void;
		SetQuery2(query:string,db:QSqlDatabase_ITF):void;
		ConnectDestroyQSqlQueryModel(f:()=>void):void;
		DisconnectDestroyQSqlQueryModel():void;
		DestroyQSqlQueryModel():void;
		DestroyQSqlQueryModelDefault():void;
		DropMimeDataDefault(data:core.QMimeData_ITF,action:number,row:number,column:number,parent:core.QModelIndex_ITF):boolean;
		FlagsDefault(index:core.QModelIndex_ITF):number;
		IndexDefault(row:number,column:number,parent:core.QModelIndex_ITF):core.QModelIndex;
		SiblingDefault(row:number,column:number,idx:core.QModelIndex_ITF):core.QModelIndex;
		BuddyDefault(index:core.QModelIndex_ITF):core.QModelIndex;
		CanDropMimeDataDefault(data:core.QMimeData_ITF,action:number,row:number,column:number,parent:core.QModelIndex_ITF):boolean;
		HasChildrenDefault(parent:core.QModelIndex_ITF):boolean;
		InsertRowsDefault(row:number,count:number,parent:core.QModelIndex_ITF):boolean;
		ItemDataDefault(index:core.QModelIndex_ITF):Map<number,core.QVariant>;
		MatchDefault(start:core.QModelIndex_ITF,role:number,value:core.QVariant_ITF,hits:number,flags:number):core.QModelIndex[];
		MimeDataDefault(indexes:core.QModelIndex[]):core.QMimeData;
		MimeTypesDefault():string[];
		MoveColumnsDefault(sourceParent:core.QModelIndex_ITF,sourceColumn:number,count:number,destinationParent:core.QModelIndex_ITF,destinationChild:number):boolean;
		MoveRowsDefault(sourceParent:core.QModelIndex_ITF,sourceRow:number,count:number,destinationParent:core.QModelIndex_ITF,destinationChild:number):boolean;
		ParentDefault(index:core.QModelIndex_ITF):core.QModelIndex;
		RemoveRowsDefault(row:number,count:number,parent:core.QModelIndex_ITF):boolean;
		ResetInternalDataDefault():void;
		RevertDefault():void;
		SetDataDefault(index:core.QModelIndex_ITF,value:core.QVariant_ITF,role:number):boolean;
		SetItemDataDefault(index:core.QModelIndex_ITF,roles:Map<number,core.QVariant>):boolean;
		SortDefault(column:number,order:number):void;
		SpanDefault(index:core.QModelIndex_ITF):core.QSize;
		SubmitDefault():boolean;
		SupportedDragActionsDefault():number;
		SupportedDropActionsDefault():number;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSqlQueryModelFromPointer(ptr:number):QSqlQueryModel;
	function NewQSqlQueryModel(parent:core.QObject_ITF):QSqlQueryModel;
	interface QSqlRecord_ITF {
		QSqlRecord_PTR():QSqlRecord;
	}

	class QSqlRecord {
		___pointer: number;
		QSqlRecord_PTR():QSqlRecord;
		Pointer():number;
		SetPointer(p:number):void;
		Append(field:QSqlField_ITF):void;
		Clear():void;
		ClearValues():void;
		Contains(name:string):boolean;
		Count():number;
		Field(index:number):QSqlField;
		Field2(name:string):QSqlField;
		FieldName(index:number):string;
		IndexOf(name:string):number;
		Insert(pos:number,field:QSqlField_ITF):void;
		IsEmpty():boolean;
		IsGenerated(name:string):boolean;
		IsGenerated2(index:number):boolean;
		IsNull(name:string):boolean;
		IsNull2(index:number):boolean;
		KeyValues(keyFields:QSqlRecord_ITF):QSqlRecord;
		Remove(pos:number):void;
		Replace(pos:number,field:QSqlField_ITF):void;
		SetGenerated(name:string,generated:boolean):void;
		SetGenerated2(index:number,generated:boolean):void;
		SetNull(index:number):void;
		SetNull2(name:string):void;
		SetValue(index:number,val:core.QVariant_ITF):void;
		SetValue2(name:string,val:core.QVariant_ITF):void;
		Value(index:number):core.QVariant;
		Value2(name:string):core.QVariant;
		DestroyQSqlRecord():void;
	}
	function NewQSqlRecordFromPointer(ptr:number):QSqlRecord;
	function NewQSqlRecord():QSqlRecord;
	function NewQSqlRecord2(other:QSqlRecord_ITF):QSqlRecord;
	interface QSqlRelation_ITF {
		QSqlRelation_PTR():QSqlRelation;
	}

	class QSqlRelation {
		___pointer: number;
		QSqlRelation_PTR():QSqlRelation;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSqlRelation():void;
		DisplayColumn():string;
		IndexColumn():string;
		IsValid():boolean;
		Swap(other:QSqlRelation_ITF):void;
		TableName():string;
	}
	function NewQSqlRelationFromPointer(ptr:number):QSqlRelation;
	function NewQSqlRelation():QSqlRelation;
	function NewQSqlRelation2(tableName:string,indexColumn:string,displayColumn:string):QSqlRelation;
	interface QSqlRelationalDelegate_ITF extends widgets.QItemDelegate_ITF {
		QSqlRelationalDelegate_PTR():QSqlRelationalDelegate;
	}

	class QSqlRelationalDelegate extends widgets.QItemDelegate {
		___pointer: number;
		QSqlRelationalDelegate_PTR():QSqlRelationalDelegate;
		Pointer():number;
		SetPointer(p:number):void;
		CreateEditorDefault(parent:widgets.QWidget_ITF,option:widgets.QStyleOptionViewItem_ITF,index:core.QModelIndex_ITF):widgets.QWidget;
		SetModelDataDefault(editor:widgets.QWidget_ITF,model:core.QAbstractItemModel_ITF,index:core.QModelIndex_ITF):void;
		ConnectDestroyQSqlRelationalDelegate(f:()=>void):void;
		DisconnectDestroyQSqlRelationalDelegate():void;
		DestroyQSqlRelationalDelegate():void;
		DestroyQSqlRelationalDelegateDefault():void;
		DrawCheckDefault(painter:gui.QPainter_ITF,option:widgets.QStyleOptionViewItem_ITF,rect:core.QRect_ITF,state:number):void;
		DrawDecorationDefault(painter:gui.QPainter_ITF,option:widgets.QStyleOptionViewItem_ITF,rect:core.QRect_ITF,pixmap:gui.QPixmap_ITF):void;
		DrawDisplayDefault(painter:gui.QPainter_ITF,option:widgets.QStyleOptionViewItem_ITF,rect:core.QRect_ITF,text:string):void;
		DrawFocusDefault(painter:gui.QPainter_ITF,option:widgets.QStyleOptionViewItem_ITF,rect:core.QRect_ITF):void;
		EditorEventDefault(event:core.QEvent_ITF,model:core.QAbstractItemModel_ITF,option:widgets.QStyleOptionViewItem_ITF,index:core.QModelIndex_ITF):boolean;
		EventFilterDefault(editor:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		PaintDefault(painter:gui.QPainter_ITF,option:widgets.QStyleOptionViewItem_ITF,index:core.QModelIndex_ITF):void;
		SetEditorDataDefault(editor:widgets.QWidget_ITF,index:core.QModelIndex_ITF):void;
		SizeHintDefault(option:widgets.QStyleOptionViewItem_ITF,index:core.QModelIndex_ITF):core.QSize;
		UpdateEditorGeometryDefault(editor:widgets.QWidget_ITF,option:widgets.QStyleOptionViewItem_ITF,index:core.QModelIndex_ITF):void;
		DestroyEditorDefault(editor:widgets.QWidget_ITF,index:core.QModelIndex_ITF):void;
		HelpEventDefault(event:gui.QHelpEvent_ITF,view:widgets.QAbstractItemView_ITF,option:widgets.QStyleOptionViewItem_ITF,index:core.QModelIndex_ITF):boolean;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSqlRelationalDelegateFromPointer(ptr:number):QSqlRelationalDelegate;
	function NewQSqlRelationalDelegate(parent:core.QObject_ITF):QSqlRelationalDelegate;
	interface QSqlRelationalTableModel_ITF extends QSqlTableModel_ITF {
		QSqlRelationalTableModel_PTR():QSqlRelationalTableModel;
	}

	class QSqlRelationalTableModel extends QSqlTableModel {
		___pointer: number;
		QSqlRelationalTableModel_PTR():QSqlRelationalTableModel;
		Pointer():number;
		SetPointer(p:number):void;
		Relation(column:number):QSqlRelation;
		ConnectRelationModel(f:(column:number)=>QSqlTableModel):void;
		DisconnectRelationModel():void;
		RelationModel(column:number):QSqlTableModel;
		RelationModelDefault(column:number):QSqlTableModel;
		ConnectRevertRow(f:(row:number)=>void):void;
		DisconnectRevertRow():void;
		RevertRow(row:number):void;
		RevertRowDefault(row:number):void;
		ConnectSelect(f:()=>boolean):void;
		DisconnectSelect():void;
		Select():boolean;
		SelectDefault():boolean;
		SetJoinMode(joinMode:number):void;
		ConnectSetRelation(f:(column:number,relation:QSqlRelation)=>void):void;
		DisconnectSetRelation():void;
		SetRelation(column:number,relation:QSqlRelation_ITF):void;
		SetRelationDefault(column:number,relation:QSqlRelation_ITF):void;
		ConnectDestroyQSqlRelationalTableModel(f:()=>void):void;
		DisconnectDestroyQSqlRelationalTableModel():void;
		DestroyQSqlRelationalTableModel():void;
		DestroyQSqlRelationalTableModelDefault():void;
	}
	function NewQSqlRelationalTableModelFromPointer(ptr:number):QSqlRelationalTableModel;
	function NewQSqlRelationalTableModel(parent:core.QObject_ITF,db:QSqlDatabase_ITF):QSqlRelationalTableModel;
	const QSqlRelationalTableModel__InnerJoin: number;
	const QSqlRelationalTableModel__LeftJoin: number;
	interface QSqlResult_ITF {
		QSqlResult_PTR():QSqlResult;
	}

	class QSqlResult {
		___pointer: number;
		QSqlResult_PTR():QSqlResult;
		Pointer():number;
		SetPointer(p:number):void;
		AddBindValue(val:core.QVariant_ITF,paramType:number):void;
		At():number;
		ConnectBindValue(f:(index:number,val:core.QVariant,paramType:number)=>void):void;
		DisconnectBindValue():void;
		BindValue(index:number,val:core.QVariant_ITF,paramType:number):void;
		BindValueDefault(index:number,val:core.QVariant_ITF,paramType:number):void;
		ConnectBindValue2(f:(placeholder:string,val:core.QVariant,paramType:number)=>void):void;
		DisconnectBindValue2():void;
		BindValue2(placeholder:string,val:core.QVariant_ITF,paramType:number):void;
		BindValue2Default(placeholder:string,val:core.QVariant_ITF,paramType:number):void;
		BindValueType(index:number):number;
		BindValueType2(placeholder:string):number;
		BindingSyntax():number;
		BoundValue(index:number):core.QVariant;
		BoundValue2(placeholder:string):core.QVariant;
		BoundValueCount():number;
		BoundValueName(index:number):string;
		BoundValues():core.QVariant[];
		Clear():void;
		ConnectData(f:(index:number)=>core.QVariant):void;
		DisconnectData():void;
		Data(index:number):core.QVariant;
		Driver():QSqlDriver;
		ConnectExec(f:()=>boolean):void;
		DisconnectExec():void;
		Exec():boolean;
		ExecDefault():boolean;
		ExecutedQuery():string;
		ConnectFetch(f:(index:number)=>boolean):void;
		DisconnectFetch():void;
		Fetch(index:number):boolean;
		ConnectFetchFirst(f:()=>boolean):void;
		DisconnectFetchFirst():void;
		FetchFirst():boolean;
		ConnectFetchLast(f:()=>boolean):void;
		DisconnectFetchLast():void;
		FetchLast():boolean;
		ConnectFetchNext(f:()=>boolean):void;
		DisconnectFetchNext():void;
		FetchNext():boolean;
		FetchNextDefault():boolean;
		ConnectFetchPrevious(f:()=>boolean):void;
		DisconnectFetchPrevious():void;
		FetchPrevious():boolean;
		FetchPreviousDefault():boolean;
		ConnectHandle(f:()=>core.QVariant):void;
		DisconnectHandle():void;
		Handle():core.QVariant;
		HandleDefault():core.QVariant;
		HasOutValues():boolean;
		IsActive():boolean;
		IsForwardOnly():boolean;
		ConnectIsNull(f:(index:number)=>boolean):void;
		DisconnectIsNull():void;
		IsNull(index:number):boolean;
		IsSelect():boolean;
		IsValid():boolean;
		LastError():QSqlError;
		ConnectLastInsertId(f:()=>core.QVariant):void;
		DisconnectLastInsertId():void;
		LastInsertId():core.QVariant;
		LastInsertIdDefault():core.QVariant;
		LastQuery():string;
		ConnectNumRowsAffected(f:()=>number):void;
		DisconnectNumRowsAffected():void;
		NumRowsAffected():number;
		ConnectPrepare(f:(query:string)=>boolean):void;
		DisconnectPrepare():void;
		Prepare(query:string):boolean;
		PrepareDefault(query:string):boolean;
		ConnectRecord(f:()=>QSqlRecord):void;
		DisconnectRecord():void;
		Record():QSqlRecord;
		RecordDefault():QSqlRecord;
		ConnectReset(f:(query:string)=>boolean):void;
		DisconnectReset():void;
		Reset(query:string):boolean;
		ResetBindCount():void;
		ConnectSavePrepare(f:(query:string)=>boolean):void;
		DisconnectSavePrepare():void;
		SavePrepare(query:string):boolean;
		SavePrepareDefault(query:string):boolean;
		ConnectSetActive(f:(active:boolean)=>void):void;
		DisconnectSetActive():void;
		SetActive(active:boolean):void;
		SetActiveDefault(active:boolean):void;
		ConnectSetAt(f:(index:number)=>void):void;
		DisconnectSetAt():void;
		SetAt(index:number):void;
		SetAtDefault(index:number):void;
		ConnectSetForwardOnly(f:(forward:boolean)=>void):void;
		DisconnectSetForwardOnly():void;
		SetForwardOnly(forward:boolean):void;
		SetForwardOnlyDefault(forward:boolean):void;
		ConnectSetLastError(f:(error:QSqlError)=>void):void;
		DisconnectSetLastError():void;
		SetLastError(error:QSqlError_ITF):void;
		SetLastErrorDefault(error:QSqlError_ITF):void;
		ConnectSetQuery(f:(query:string)=>void):void;
		DisconnectSetQuery():void;
		SetQuery(query:string):void;
		SetQueryDefault(query:string):void;
		ConnectSetSelect(f:(sele:boolean)=>void):void;
		DisconnectSetSelect():void;
		SetSelect(sele:boolean):void;
		SetSelectDefault(sele:boolean):void;
		ConnectSize(f:()=>number):void;
		DisconnectSize():void;
		Size():number;
		ConnectDestroyQSqlResult(f:()=>void):void;
		DisconnectDestroyQSqlResult():void;
		DestroyQSqlResult():void;
		DestroyQSqlResultDefault():void;
	}
	function NewQSqlResultFromPointer(ptr:number):QSqlResult;
	function NewQSqlResult(db:QSqlDriver_ITF):QSqlResult;
	const QSqlResult__PositionalBinding: number;
	const QSqlResult__NamedBinding: number;
	interface QSqlTableModel_ITF extends QSqlQueryModel_ITF {
		QSqlTableModel_PTR():QSqlTableModel;
	}

	class QSqlTableModel extends QSqlQueryModel {
		___pointer: number;
		QSqlTableModel_PTR():QSqlTableModel;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectBeforeDelete(f:(row:number)=>void):void;
		DisconnectBeforeDelete():void;
		BeforeDelete(row:number):void;
		ConnectBeforeInsert(f:(record:QSqlRecord)=>void):void;
		DisconnectBeforeInsert():void;
		BeforeInsert(record:QSqlRecord_ITF):void;
		ConnectBeforeUpdate(f:(row:number,record:QSqlRecord)=>void):void;
		DisconnectBeforeUpdate():void;
		BeforeUpdate(row:number,record:QSqlRecord_ITF):void;
		Database():QSqlDatabase;
		ConnectDeleteRowFromTable(f:(row:number)=>boolean):void;
		DisconnectDeleteRowFromTable():void;
		DeleteRowFromTable(row:number):boolean;
		DeleteRowFromTableDefault(row:number):boolean;
		EditStrategy():number;
		FieldIndex(fieldName:string):number;
		Filter():string;
		InsertRecord(row:number,record:QSqlRecord_ITF):boolean;
		ConnectInsertRowIntoTable(f:(values:QSqlRecord)=>boolean):void;
		DisconnectInsertRowIntoTable():void;
		InsertRowIntoTable(values:QSqlRecord_ITF):boolean;
		InsertRowIntoTableDefault(values:QSqlRecord_ITF):boolean;
		IsDirty(index:core.QModelIndex_ITF):boolean;
		IsDirty2():boolean;
		ConnectOrderByClause(f:()=>string):void;
		DisconnectOrderByClause():void;
		OrderByClause():string;
		OrderByClauseDefault():string;
		PrimaryKey():QSqlIndex;
		PrimaryValues(row:number):QSqlRecord;
		ConnectPrimeInsert(f:(row:number,record:QSqlRecord)=>void):void;
		DisconnectPrimeInsert():void;
		PrimeInsert(row:number,record:QSqlRecord_ITF):void;
		ConnectRevertAll(f:()=>void):void;
		DisconnectRevertAll():void;
		RevertAll():void;
		RevertAllDefault():void;
		ConnectRevertRow(f:(row:number)=>void):void;
		DisconnectRevertRow():void;
		RevertRow(row:number):void;
		RevertRowDefault(row:number):void;
		ConnectSelect(f:()=>boolean):void;
		DisconnectSelect():void;
		Select():boolean;
		SelectDefault():boolean;
		ConnectSelectRow(f:(row:number)=>boolean):void;
		DisconnectSelectRow():void;
		SelectRow(row:number):boolean;
		SelectRowDefault(row:number):boolean;
		ConnectSelectStatement(f:()=>string):void;
		DisconnectSelectStatement():void;
		SelectStatement():string;
		SelectStatementDefault():string;
		ConnectSetEditStrategy(f:(strategy:number)=>void):void;
		DisconnectSetEditStrategy():void;
		SetEditStrategy(strategy:number):void;
		SetEditStrategyDefault(strategy:number):void;
		ConnectSetFilter(f:(filter:string)=>void):void;
		DisconnectSetFilter():void;
		SetFilter(filter:string):void;
		SetFilterDefault(filter:string):void;
		SetPrimaryKey(key:QSqlIndex_ITF):void;
		SetRecord(row:number,values:QSqlRecord_ITF):boolean;
		ConnectSetSort(f:(column:number,order:number)=>void):void;
		DisconnectSetSort():void;
		SetSort(column:number,order:number):void;
		SetSortDefault(column:number,order:number):void;
		ConnectSetTable(f:(tableName:string)=>void):void;
		DisconnectSetTable():void;
		SetTable(tableName:string):void;
		SetTableDefault(tableName:string):void;
		ConnectSubmitAll(f:()=>boolean):void;
		DisconnectSubmitAll():void;
		SubmitAll():boolean;
		SubmitAllDefault():boolean;
		TableName():string;
		ConnectUpdateRowInTable(f:(row:number,values:QSqlRecord)=>boolean):void;
		DisconnectUpdateRowInTable():void;
		UpdateRowInTable(row:number,values:QSqlRecord_ITF):boolean;
		UpdateRowInTableDefault(row:number,values:QSqlRecord_ITF):boolean;
		ConnectDestroyQSqlTableModel(f:()=>void):void;
		DisconnectDestroyQSqlTableModel():void;
		DestroyQSqlTableModel():void;
		DestroyQSqlTableModelDefault():void;
	}
	function NewQSqlTableModelFromPointer(ptr:number):QSqlTableModel;
	function NewQSqlTableModel(parent:core.QObject_ITF,db:QSqlDatabase_ITF):QSqlTableModel;
	const QSqlTableModel__OnFieldChange: number;
	const QSqlTableModel__OnRowChange: number;
	const QSqlTableModel__OnManualSubmit: number;
}