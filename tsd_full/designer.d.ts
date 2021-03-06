/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="widgets.d.ts" />
declare namespace designer {
	interface AppFontDialog_ITF extends widgets.QDialog_ITF {
		AppFontDialog_PTR():AppFontDialog;
	}

	class AppFontDialog extends widgets.QDialog {
		___pointer: number;
		AppFontDialog_PTR():AppFontDialog;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface AppFontWidget_ITF extends widgets.QGroupBox_ITF {
		AppFontWidget_PTR():AppFontWidget;
	}

	class AppFontWidget extends widgets.QGroupBox {
		___pointer: number;
		AppFontWidget_PTR():AppFontWidget;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface AppearanceOptions_ITF {
		AppearanceOptions_PTR():AppearanceOptions;
	}

	class AppearanceOptions {
		___pointer: number;
		AppearanceOptions_PTR():AppearanceOptions;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyAppearanceOptions():void;
	}
	interface AssistantClient_ITF extends core.QObject_ITF {
		AssistantClient_PTR():AssistantClient;
	}

	class AssistantClient extends core.QObject {
		___pointer: number;
		AssistantClient_PTR():AssistantClient;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface DockedMainWindow_ITF extends MainWindowBase_ITF {
		DockedMainWindow_PTR():DockedMainWindow;
	}

	class DockedMainWindow extends MainWindowBase {
		___pointer: number;
		DockedMainWindow_PTR():DockedMainWindow;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface DockedMdiArea_ITF extends widgets.QMdiArea_ITF {
		DockedMdiArea_PTR():DockedMdiArea;
	}

	class DockedMdiArea extends widgets.QMdiArea {
		___pointer: number;
		DockedMdiArea_PTR():DockedMdiArea;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface MainWindowBase_ITF extends widgets.QMainWindow_ITF {
		MainWindowBase_PTR():MainWindowBase;
	}

	class MainWindowBase extends widgets.QMainWindow {
		___pointer: number;
		MainWindowBase_PTR():MainWindowBase;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface NewForm_ITF extends widgets.QDialog_ITF {
		NewForm_PTR():NewForm;
	}

	class NewForm extends widgets.QDialog {
		___pointer: number;
		NewForm_PTR():NewForm;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface PreferencesDialog_ITF extends widgets.QDialog_ITF {
		PreferencesDialog_PTR():PreferencesDialog;
	}

	class PreferencesDialog extends widgets.QDialog {
		___pointer: number;
		PreferencesDialog_PTR():PreferencesDialog;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QAbstractExtensionFactory_ITF {
		QAbstractExtensionFactory_PTR():QAbstractExtensionFactory;
	}

	class QAbstractExtensionFactory {
		___pointer: number;
		QAbstractExtensionFactory_PTR():QAbstractExtensionFactory;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QAbstractExtensionManager_ITF {
		QAbstractExtensionManager_PTR():QAbstractExtensionManager;
	}

	class QAbstractExtensionManager {
		___pointer: number;
		QAbstractExtensionManager_PTR():QAbstractExtensionManager;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectExtension(f:(object:core.QObject,iid:string)=>core.QObject):void;
		DisconnectExtension():void;
		Extension(object:core.QObject_ITF,iid:string):core.QObject;
		ConnectRegisterExtensions(f:(factory:QAbstractExtensionFactory,iid:string)=>void):void;
		DisconnectRegisterExtensions():void;
		RegisterExtensions(factory:QAbstractExtensionFactory_ITF,iid:string):void;
		ConnectUnregisterExtensions(f:(factory:QAbstractExtensionFactory,iid:string)=>void):void;
		DisconnectUnregisterExtensions():void;
		UnregisterExtensions(factory:QAbstractExtensionFactory_ITF,iid:string):void;
		ConnectDestroyQAbstractExtensionManager(f:()=>void):void;
		DisconnectDestroyQAbstractExtensionManager():void;
		DestroyQAbstractExtensionManager():void;
		DestroyQAbstractExtensionManagerDefault():void;
	}
	function NewQAbstractExtensionManagerFromPointer(ptr:number):QAbstractExtensionManager;
	interface QAbstractFormBuilder_ITF {
		QAbstractFormBuilder_PTR():QAbstractFormBuilder;
	}

	class QAbstractFormBuilder {
		___pointer: number;
		QAbstractFormBuilder_PTR():QAbstractFormBuilder;
		Pointer():number;
		SetPointer(p:number):void;
		ErrorString():string;
		ConnectLoad(f:(device:core.QIODevice,parent:widgets.QWidget)=>widgets.QWidget):void;
		DisconnectLoad():void;
		Load(device:core.QIODevice_ITF,parent:widgets.QWidget_ITF):widgets.QWidget;
		LoadDefault(device:core.QIODevice_ITF,parent:widgets.QWidget_ITF):widgets.QWidget;
		ConnectSave(f:(device:core.QIODevice,widget:widgets.QWidget)=>void):void;
		DisconnectSave():void;
		Save(device:core.QIODevice_ITF,widget:widgets.QWidget_ITF):void;
		SaveDefault(device:core.QIODevice_ITF,widget:widgets.QWidget_ITF):void;
		SetWorkingDirectory(directory:core.QDir_ITF):void;
		WorkingDirectory():core.QDir;
		ConnectDestroyQAbstractFormBuilder(f:()=>void):void;
		DisconnectDestroyQAbstractFormBuilder():void;
		DestroyQAbstractFormBuilder():void;
		DestroyQAbstractFormBuilderDefault():void;
	}
	function NewQAbstractFormBuilderFromPointer(ptr:number):QAbstractFormBuilder;
	function NewQAbstractFormBuilder():QAbstractFormBuilder;
	interface QDesigner_ITF extends widgets.QApplication_ITF {
		QDesigner_PTR():QDesigner;
	}

	class QDesigner extends widgets.QApplication {
		___pointer: number;
		QDesigner_PTR():QDesigner;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QDesignerActionEditorInterface_ITF extends widgets.QWidget_ITF {
		QDesignerActionEditorInterface_PTR():QDesignerActionEditorInterface;
	}

	class QDesignerActionEditorInterface extends widgets.QWidget {
		___pointer: number;
		QDesignerActionEditorInterface_PTR():QDesignerActionEditorInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCore(f:()=>QDesignerFormEditorInterface):void;
		DisconnectCore():void;
		Core():QDesignerFormEditorInterface;
		CoreDefault():QDesignerFormEditorInterface;
		ConnectManageAction(f:(action:widgets.QAction)=>void):void;
		DisconnectManageAction():void;
		ManageAction(action:widgets.QAction_ITF):void;
		ConnectSetFormWindow(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectSetFormWindow():void;
		SetFormWindow(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectUnmanageAction(f:(action:widgets.QAction)=>void):void;
		DisconnectUnmanageAction():void;
		UnmanageAction(action:widgets.QAction_ITF):void;
		ConnectDestroyQDesignerActionEditorInterface(f:()=>void):void;
		DisconnectDestroyQDesignerActionEditorInterface():void;
		DestroyQDesignerActionEditorInterface():void;
		DestroyQDesignerActionEditorInterfaceDefault():void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		EventDefault(event:core.QEvent_ITF):boolean;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
		HideEventDefault(event:gui.QHideEvent_ITF):void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MetricDefault(m:number):number;
		MinimumSizeHintDefault():core.QSize;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		PaintEngineDefault():gui.QPaintEngine;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		RaiseDefault():void;
		RepaintDefault():void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetFocus2Default():void;
		SetHiddenDefault(hidden:boolean):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowModifiedDefault(vbo:boolean):void;
		SetWindowTitleDefault(vqs:string):void;
		ShowDefault():void;
		ShowEventDefault(event:gui.QShowEvent_ITF):void;
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		SizeHintDefault():core.QSize;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		UpdateDefault():void;
		UpdateMicroFocusDefault():void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQDesignerActionEditorInterfaceFromPointer(ptr:number):QDesignerActionEditorInterface;
	function NewQDesignerActionEditorInterface(parent:widgets.QWidget_ITF,flags:number):QDesignerActionEditorInterface;
	interface QDesignerActions_ITF extends core.QObject_ITF {
		QDesignerActions_PTR():QDesignerActions;
	}

	class QDesignerActions extends core.QObject {
		___pointer: number;
		QDesignerActions_PTR():QDesignerActions;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QDesignerAppearanceOptionsPage_ITF extends core.QObject_ITF {
		QDesignerAppearanceOptionsPage_PTR():QDesignerAppearanceOptionsPage;
	}

	class QDesignerAppearanceOptionsPage extends core.QObject {
		___pointer: number;
		QDesignerAppearanceOptionsPage_PTR():QDesignerAppearanceOptionsPage;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QDesignerAppearanceOptionsWidget_ITF extends widgets.QWidget_ITF {
		QDesignerAppearanceOptionsWidget_PTR():QDesignerAppearanceOptionsWidget;
	}

	class QDesignerAppearanceOptionsWidget extends widgets.QWidget {
		___pointer: number;
		QDesignerAppearanceOptionsWidget_PTR():QDesignerAppearanceOptionsWidget;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QDesignerClient_ITF extends core.QObject_ITF {
		QDesignerClient_PTR():QDesignerClient;
	}

	class QDesignerClient extends core.QObject {
		___pointer: number;
		QDesignerClient_PTR():QDesignerClient;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QDesignerComponents_ITF {
		QDesignerComponents_PTR():QDesignerComponents;
	}

	class QDesignerComponents {
		___pointer: number;
		QDesignerComponents_PTR():QDesignerComponents;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDesignerComponents():void;
	}
	interface QDesignerContainerExtension_ITF {
		QDesignerContainerExtension_PTR():QDesignerContainerExtension;
	}

	class QDesignerContainerExtension {
		___pointer: number;
		QDesignerContainerExtension_PTR():QDesignerContainerExtension;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAddWidget(f:(page:widgets.QWidget)=>void):void;
		DisconnectAddWidget():void;
		AddWidget(page:widgets.QWidget_ITF):void;
		ConnectCanAddWidget(f:()=>boolean):void;
		DisconnectCanAddWidget():void;
		CanAddWidget():boolean;
		CanAddWidgetDefault():boolean;
		ConnectCanRemove(f:(index:number)=>boolean):void;
		DisconnectCanRemove():void;
		CanRemove(index:number):boolean;
		CanRemoveDefault(index:number):boolean;
		ConnectCount(f:()=>number):void;
		DisconnectCount():void;
		Count():number;
		ConnectCurrentIndex(f:()=>number):void;
		DisconnectCurrentIndex():void;
		CurrentIndex():number;
		ConnectInsertWidget(f:(index:number,page:widgets.QWidget)=>void):void;
		DisconnectInsertWidget():void;
		InsertWidget(index:number,page:widgets.QWidget_ITF):void;
		ConnectRemove(f:(index:number)=>void):void;
		DisconnectRemove():void;
		Remove(index:number):void;
		ConnectSetCurrentIndex(f:(index:number)=>void):void;
		DisconnectSetCurrentIndex():void;
		SetCurrentIndex(index:number):void;
		ConnectWidget(f:(index:number)=>widgets.QWidget):void;
		DisconnectWidget():void;
		Widget(index:number):widgets.QWidget;
		ConnectDestroyQDesignerContainerExtension(f:()=>void):void;
		DisconnectDestroyQDesignerContainerExtension():void;
		DestroyQDesignerContainerExtension():void;
		DestroyQDesignerContainerExtensionDefault():void;
	}
	function NewQDesignerContainerExtensionFromPointer(ptr:number):QDesignerContainerExtension;
	interface QDesignerCustomWidgetCollectionInterface_ITF {
		QDesignerCustomWidgetCollectionInterface_PTR():QDesignerCustomWidgetCollectionInterface;
	}

	class QDesignerCustomWidgetCollectionInterface {
		___pointer: number;
		QDesignerCustomWidgetCollectionInterface_PTR():QDesignerCustomWidgetCollectionInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCustomWidgets(f:()=>QDesignerCustomWidgetInterface[]):void;
		DisconnectCustomWidgets():void;
		CustomWidgets():QDesignerCustomWidgetInterface[];
		ConnectDestroyQDesignerCustomWidgetCollectionInterface(f:()=>void):void;
		DisconnectDestroyQDesignerCustomWidgetCollectionInterface():void;
		DestroyQDesignerCustomWidgetCollectionInterface():void;
		DestroyQDesignerCustomWidgetCollectionInterfaceDefault():void;
	}
	function NewQDesignerCustomWidgetCollectionInterfaceFromPointer(ptr:number):QDesignerCustomWidgetCollectionInterface;
	interface QDesignerCustomWidgetInterface_ITF {
		QDesignerCustomWidgetInterface_PTR():QDesignerCustomWidgetInterface;
	}

	class QDesignerCustomWidgetInterface {
		___pointer: number;
		QDesignerCustomWidgetInterface_PTR():QDesignerCustomWidgetInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCodeTemplate(f:()=>string):void;
		DisconnectCodeTemplate():void;
		CodeTemplate():string;
		CodeTemplateDefault():string;
		ConnectCreateWidget(f:(parent:widgets.QWidget)=>widgets.QWidget):void;
		DisconnectCreateWidget():void;
		CreateWidget(parent:widgets.QWidget_ITF):widgets.QWidget;
		ConnectDomXml(f:()=>string):void;
		DisconnectDomXml():void;
		DomXml():string;
		DomXmlDefault():string;
		ConnectGroup(f:()=>string):void;
		DisconnectGroup():void;
		Group():string;
		ConnectIcon(f:()=>gui.QIcon):void;
		DisconnectIcon():void;
		Icon():gui.QIcon;
		ConnectIncludeFile(f:()=>string):void;
		DisconnectIncludeFile():void;
		IncludeFile():string;
		ConnectInitialize(f:(formEditor:QDesignerFormEditorInterface)=>void):void;
		DisconnectInitialize():void;
		Initialize(formEditor:QDesignerFormEditorInterface_ITF):void;
		InitializeDefault(formEditor:QDesignerFormEditorInterface_ITF):void;
		ConnectIsContainer(f:()=>boolean):void;
		DisconnectIsContainer():void;
		IsContainer():boolean;
		ConnectIsInitialized(f:()=>boolean):void;
		DisconnectIsInitialized():void;
		IsInitialized():boolean;
		IsInitializedDefault():boolean;
		ConnectName(f:()=>string):void;
		DisconnectName():void;
		Name():string;
		ConnectToolTip(f:()=>string):void;
		DisconnectToolTip():void;
		ToolTip():string;
		ConnectWhatsThis(f:()=>string):void;
		DisconnectWhatsThis():void;
		WhatsThis():string;
		ConnectDestroyQDesignerCustomWidgetInterface(f:()=>void):void;
		DisconnectDestroyQDesignerCustomWidgetInterface():void;
		DestroyQDesignerCustomWidgetInterface():void;
		DestroyQDesignerCustomWidgetInterfaceDefault():void;
	}
	function NewQDesignerCustomWidgetInterfaceFromPointer(ptr:number):QDesignerCustomWidgetInterface;
	interface QDesignerDynamicPropertySheetExtension_ITF {
		QDesignerDynamicPropertySheetExtension_PTR():QDesignerDynamicPropertySheetExtension;
	}

	class QDesignerDynamicPropertySheetExtension {
		___pointer: number;
		QDesignerDynamicPropertySheetExtension_PTR():QDesignerDynamicPropertySheetExtension;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAddDynamicProperty(f:(propertyName:string,value:core.QVariant)=>number):void;
		DisconnectAddDynamicProperty():void;
		AddDynamicProperty(propertyName:string,value:core.QVariant_ITF):number;
		ConnectCanAddDynamicProperty(f:(propertyName:string)=>boolean):void;
		DisconnectCanAddDynamicProperty():void;
		CanAddDynamicProperty(propertyName:string):boolean;
		ConnectDynamicPropertiesAllowed(f:()=>boolean):void;
		DisconnectDynamicPropertiesAllowed():void;
		DynamicPropertiesAllowed():boolean;
		ConnectIsDynamicProperty(f:(index:number)=>boolean):void;
		DisconnectIsDynamicProperty():void;
		IsDynamicProperty(index:number):boolean;
		ConnectRemoveDynamicProperty(f:(index:number)=>boolean):void;
		DisconnectRemoveDynamicProperty():void;
		RemoveDynamicProperty(index:number):boolean;
		ConnectDestroyQDesignerDynamicPropertySheetExtension(f:()=>void):void;
		DisconnectDestroyQDesignerDynamicPropertySheetExtension():void;
		DestroyQDesignerDynamicPropertySheetExtension():void;
		DestroyQDesignerDynamicPropertySheetExtensionDefault():void;
	}
	function NewQDesignerDynamicPropertySheetExtensionFromPointer(ptr:number):QDesignerDynamicPropertySheetExtension;
	interface QDesignerFormEditorInterface_ITF extends core.QObject_ITF {
		QDesignerFormEditorInterface_PTR():QDesignerFormEditorInterface;
	}

	class QDesignerFormEditorInterface extends core.QObject {
		___pointer: number;
		QDesignerFormEditorInterface_PTR():QDesignerFormEditorInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ActionEditor():QDesignerActionEditorInterface;
		ExtensionManager():QExtensionManager;
		FormWindowManager():QDesignerFormWindowManagerInterface;
		ObjectInspector():QDesignerObjectInspectorInterface;
		PropertyEditor():QDesignerPropertyEditorInterface;
		SetActionEditor(actionEditor:QDesignerActionEditorInterface_ITF):void;
		SetObjectInspector(objectInspector:QDesignerObjectInspectorInterface_ITF):void;
		SetPropertyEditor(propertyEditor:QDesignerPropertyEditorInterface_ITF):void;
		SetWidgetBox(widgetBox:QDesignerWidgetBoxInterface_ITF):void;
		TopLevel():widgets.QWidget;
		WidgetBox():QDesignerWidgetBoxInterface;
		ConnectDestroyQDesignerFormEditorInterface(f:()=>void):void;
		DisconnectDestroyQDesignerFormEditorInterface():void;
		DestroyQDesignerFormEditorInterface():void;
		DestroyQDesignerFormEditorInterfaceDefault():void;
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
	function NewQDesignerFormEditorInterfaceFromPointer(ptr:number):QDesignerFormEditorInterface;
	function NewQDesignerFormEditorInterface(parent:core.QObject_ITF):QDesignerFormEditorInterface;
	interface QDesignerFormWindow_ITF extends widgets.QWidget_ITF {
		QDesignerFormWindow_PTR():QDesignerFormWindow;
	}

	class QDesignerFormWindow extends widgets.QWidget {
		___pointer: number;
		QDesignerFormWindow_PTR():QDesignerFormWindow;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QDesignerFormWindowCursorInterface_ITF {
		QDesignerFormWindowCursorInterface_PTR():QDesignerFormWindowCursorInterface;
	}

	class QDesignerFormWindowCursorInterface {
		___pointer: number;
		QDesignerFormWindowCursorInterface_PTR():QDesignerFormWindowCursorInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCurrent(f:()=>widgets.QWidget):void;
		DisconnectCurrent():void;
		Current():widgets.QWidget;
		ConnectFormWindow(f:()=>QDesignerFormWindowInterface):void;
		DisconnectFormWindow():void;
		FormWindow():QDesignerFormWindowInterface;
		ConnectHasSelection(f:()=>boolean):void;
		DisconnectHasSelection():void;
		HasSelection():boolean;
		IsWidgetSelected(widget:widgets.QWidget_ITF):boolean;
		ConnectMovePosition(f:(operation:number,mode:number)=>boolean):void;
		DisconnectMovePosition():void;
		MovePosition(operation:number,mode:number):boolean;
		ConnectPosition(f:()=>number):void;
		DisconnectPosition():void;
		Position():number;
		ConnectResetWidgetProperty(f:(widget:widgets.QWidget,name:string)=>void):void;
		DisconnectResetWidgetProperty():void;
		ResetWidgetProperty(widget:widgets.QWidget_ITF,name:string):void;
		ConnectSelectedWidget(f:(index:number)=>widgets.QWidget):void;
		DisconnectSelectedWidget():void;
		SelectedWidget(index:number):widgets.QWidget;
		ConnectSelectedWidgetCount(f:()=>number):void;
		DisconnectSelectedWidgetCount():void;
		SelectedWidgetCount():number;
		ConnectSetPosition(f:(position:number,mode:number)=>void):void;
		DisconnectSetPosition():void;
		SetPosition(position:number,mode:number):void;
		ConnectSetProperty(f:(name:string,value:core.QVariant)=>void):void;
		DisconnectSetProperty():void;
		SetProperty(name:string,value:core.QVariant_ITF):void;
		ConnectSetWidgetProperty(f:(widget:widgets.QWidget,name:string,value:core.QVariant)=>void):void;
		DisconnectSetWidgetProperty():void;
		SetWidgetProperty(widget:widgets.QWidget_ITF,name:string,value:core.QVariant_ITF):void;
		ConnectWidget(f:(index:number)=>widgets.QWidget):void;
		DisconnectWidget():void;
		Widget(index:number):widgets.QWidget;
		ConnectWidgetCount(f:()=>number):void;
		DisconnectWidgetCount():void;
		WidgetCount():number;
		ConnectDestroyQDesignerFormWindowCursorInterface(f:()=>void):void;
		DisconnectDestroyQDesignerFormWindowCursorInterface():void;
		DestroyQDesignerFormWindowCursorInterface():void;
		DestroyQDesignerFormWindowCursorInterfaceDefault():void;
	}
	function NewQDesignerFormWindowCursorInterfaceFromPointer(ptr:number):QDesignerFormWindowCursorInterface;
	const QDesignerFormWindowCursorInterface__NoMove: number;
	const QDesignerFormWindowCursorInterface__Start: number;
	const QDesignerFormWindowCursorInterface__End: number;
	const QDesignerFormWindowCursorInterface__Next: number;
	const QDesignerFormWindowCursorInterface__Prev: number;
	const QDesignerFormWindowCursorInterface__Left: number;
	const QDesignerFormWindowCursorInterface__Right: number;
	const QDesignerFormWindowCursorInterface__Up: number;
	const QDesignerFormWindowCursorInterface__Down: number;
	const QDesignerFormWindowCursorInterface__MoveAnchor: number;
	const QDesignerFormWindowCursorInterface__KeepAnchor: number;
	interface QDesignerFormWindowInterface_ITF extends widgets.QWidget_ITF {
		QDesignerFormWindowInterface_PTR():QDesignerFormWindowInterface;
	}

	class QDesignerFormWindowInterface extends widgets.QWidget {
		___pointer: number;
		QDesignerFormWindowInterface_PTR():QDesignerFormWindowInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAboutToUnmanageWidget(f:(widget:widgets.QWidget)=>void):void;
		DisconnectAboutToUnmanageWidget():void;
		AboutToUnmanageWidget(widget:widgets.QWidget_ITF):void;
		ConnectAbsoluteDir(f:()=>core.QDir):void;
		DisconnectAbsoluteDir():void;
		AbsoluteDir():core.QDir;
		ConnectActivateResourceFilePaths(f:(paths:string[],errorCount:number,errorMessages:string)=>void):void;
		DisconnectActivateResourceFilePaths():void;
		ActivateResourceFilePaths(paths:string[],errorCount:number,errorMessages:string):void;
		ActivateResourceFilePathsDefault(paths:string[],errorCount:number,errorMessages:string):void;
		ConnectActivated(f:(widget:widgets.QWidget)=>void):void;
		DisconnectActivated():void;
		Activated(widget:widgets.QWidget_ITF):void;
		ActiveResourceFilePaths():string[];
		ConnectAddResourceFile(f:(path:string)=>void):void;
		DisconnectAddResourceFile():void;
		AddResourceFile(path:string):void;
		ConnectAuthor(f:()=>string):void;
		DisconnectAuthor():void;
		Author():string;
		ConnectChanged(f:()=>void):void;
		DisconnectChanged():void;
		Changed():void;
		ConnectCheckContents(f:()=>string[]):void;
		DisconnectCheckContents():void;
		CheckContents():string[];
		ConnectClearSelection(f:(update:boolean)=>void):void;
		DisconnectClearSelection():void;
		ClearSelection(update:boolean):void;
		ConnectComment(f:()=>string):void;
		DisconnectComment():void;
		Comment():string;
		ConnectContents(f:()=>string):void;
		DisconnectContents():void;
		Contents():string;
		ConnectCore(f:()=>QDesignerFormEditorInterface):void;
		DisconnectCore():void;
		Core():QDesignerFormEditorInterface;
		CoreDefault():QDesignerFormEditorInterface;
		ConnectCursor(f:()=>QDesignerFormWindowCursorInterface):void;
		DisconnectCursor():void;
		Cursor():QDesignerFormWindowCursorInterface;
		ConnectEmitSelectionChanged(f:()=>void):void;
		DisconnectEmitSelectionChanged():void;
		EmitSelectionChanged():void;
		ConnectExportMacro(f:()=>string):void;
		DisconnectExportMacro():void;
		ExportMacro():string;
		ConnectFeatureChanged(f:(feature:number)=>void):void;
		DisconnectFeatureChanged():void;
		FeatureChanged(feature:number):void;
		ConnectFeatures(f:()=>number):void;
		DisconnectFeatures():void;
		Features():number;
		ConnectFileName(f:()=>string):void;
		DisconnectFileName():void;
		FileName():string;
		ConnectFileNameChanged(f:(fileName:string)=>void):void;
		DisconnectFileNameChanged():void;
		FileNameChanged(fileName:string):void;
		FindFormWindow(widget:widgets.QWidget_ITF):QDesignerFormWindowInterface;
		FindFormWindow2(object:core.QObject_ITF):QDesignerFormWindowInterface;
		ConnectFormContainer(f:()=>widgets.QWidget):void;
		DisconnectFormContainer():void;
		FormContainer():widgets.QWidget;
		ConnectGeometryChanged(f:()=>void):void;
		DisconnectGeometryChanged():void;
		GeometryChanged():void;
		ConnectGrid(f:()=>core.QPoint):void;
		DisconnectGrid():void;
		Grid():core.QPoint;
		ConnectHasFeature(f:(feature:number)=>boolean):void;
		DisconnectHasFeature():void;
		HasFeature(feature:number):boolean;
		ConnectIncludeHints(f:()=>string[]):void;
		DisconnectIncludeHints():void;
		IncludeHints():string[];
		ConnectIsDirty(f:()=>boolean):void;
		DisconnectIsDirty():void;
		IsDirty():boolean;
		ConnectIsManaged(f:(widget:widgets.QWidget)=>boolean):void;
		DisconnectIsManaged():void;
		IsManaged(widget:widgets.QWidget_ITF):boolean;
		ConnectLayoutDefault(f:(margi:number,spacing:number)=>void):void;
		DisconnectLayoutDefault():void;
		LayoutDefault(margi:number,spacing:number):void;
		ConnectLayoutFunction(f:(margi:string,spacing:string)=>void):void;
		DisconnectLayoutFunction():void;
		LayoutFunction(margi:string,spacing:string):void;
		ConnectMainContainerChanged(f:(mainContainer:widgets.QWidget)=>void):void;
		DisconnectMainContainerChanged():void;
		MainContainerChanged(mainContainer:widgets.QWidget_ITF):void;
		ConnectManageWidget(f:(widget:widgets.QWidget)=>void):void;
		DisconnectManageWidget():void;
		ManageWidget(widget:widgets.QWidget_ITF):void;
		ConnectObjectRemoved(f:(object:core.QObject)=>void):void;
		DisconnectObjectRemoved():void;
		ObjectRemoved(object:core.QObject_ITF):void;
		ConnectPixmapFunction(f:()=>string):void;
		DisconnectPixmapFunction():void;
		PixmapFunction():string;
		ConnectRemoveResourceFile(f:(path:string)=>void):void;
		DisconnectRemoveResourceFile():void;
		RemoveResourceFile(path:string):void;
		ConnectResourceFileSaveMode(f:()=>number):void;
		DisconnectResourceFileSaveMode():void;
		ResourceFileSaveMode():number;
		ConnectResourceFiles(f:()=>string[]):void;
		DisconnectResourceFiles():void;
		ResourceFiles():string[];
		ConnectResourceFilesChanged(f:()=>void):void;
		DisconnectResourceFilesChanged():void;
		ResourceFilesChanged():void;
		ConnectSelectWidget(f:(widget:widgets.QWidget,sele:boolean)=>void):void;
		DisconnectSelectWidget():void;
		SelectWidget(widget:widgets.QWidget_ITF,sele:boolean):void;
		ConnectSelectionChanged(f:()=>void):void;
		DisconnectSelectionChanged():void;
		SelectionChanged():void;
		ConnectSetAuthor(f:(author:string)=>void):void;
		DisconnectSetAuthor():void;
		SetAuthor(author:string):void;
		ConnectSetComment(f:(comment:string)=>void):void;
		DisconnectSetComment():void;
		SetComment(comment:string):void;
		ConnectSetContents(f:(device:core.QIODevice,errorMessage:string)=>boolean):void;
		DisconnectSetContents():void;
		SetContents(device:core.QIODevice_ITF,errorMessage:string):boolean;
		ConnectSetContents2(f:(contents:string)=>boolean):void;
		DisconnectSetContents2():void;
		SetContents2(contents:string):boolean;
		ConnectSetDirty(f:(dirty:boolean)=>void):void;
		DisconnectSetDirty():void;
		SetDirty(dirty:boolean):void;
		ConnectSetExportMacro(f:(exportMacro:string)=>void):void;
		DisconnectSetExportMacro():void;
		SetExportMacro(exportMacro:string):void;
		ConnectSetFeatures(f:(features:number)=>void):void;
		DisconnectSetFeatures():void;
		SetFeatures(features:number):void;
		ConnectSetFileName(f:(fileName:string)=>void):void;
		DisconnectSetFileName():void;
		SetFileName(fileName:string):void;
		ConnectSetGrid(f:(grid:core.QPoint)=>void):void;
		DisconnectSetGrid():void;
		SetGrid(grid:core.QPoint_ITF):void;
		ConnectSetIncludeHints(f:(includeHints:string[])=>void):void;
		DisconnectSetIncludeHints():void;
		SetIncludeHints(includeHints:string[]):void;
		ConnectSetLayoutDefault(f:(margi:number,spacing:number)=>void):void;
		DisconnectSetLayoutDefault():void;
		SetLayoutDefault(margi:number,spacing:number):void;
		ConnectSetLayoutFunction(f:(margi:string,spacing:string)=>void):void;
		DisconnectSetLayoutFunction():void;
		SetLayoutFunction(margi:string,spacing:string):void;
		ConnectSetMainContainer(f:(mainContainer:widgets.QWidget)=>void):void;
		DisconnectSetMainContainer():void;
		SetMainContainer(mainContainer:widgets.QWidget_ITF):void;
		ConnectSetPixmapFunction(f:(pixmapFunction:string)=>void):void;
		DisconnectSetPixmapFunction():void;
		SetPixmapFunction(pixmapFunction:string):void;
		ConnectSetResourceFileSaveMode(f:(behavior:number)=>void):void;
		DisconnectSetResourceFileSaveMode():void;
		SetResourceFileSaveMode(behavior:number):void;
		ConnectUnmanageWidget(f:(widget:widgets.QWidget)=>void):void;
		DisconnectUnmanageWidget():void;
		UnmanageWidget(widget:widgets.QWidget_ITF):void;
		ConnectWidgetManaged(f:(widget:widgets.QWidget)=>void):void;
		DisconnectWidgetManaged():void;
		WidgetManaged(widget:widgets.QWidget_ITF):void;
		ConnectWidgetRemoved(f:(widget:widgets.QWidget)=>void):void;
		DisconnectWidgetRemoved():void;
		WidgetRemoved(widget:widgets.QWidget_ITF):void;
		ConnectWidgetUnmanaged(f:(widget:widgets.QWidget)=>void):void;
		DisconnectWidgetUnmanaged():void;
		WidgetUnmanaged(widget:widgets.QWidget_ITF):void;
		ConnectDestroyQDesignerFormWindowInterface(f:()=>void):void;
		DisconnectDestroyQDesignerFormWindowInterface():void;
		DestroyQDesignerFormWindowInterface():void;
		DestroyQDesignerFormWindowInterfaceDefault():void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		EventDefault(event:core.QEvent_ITF):boolean;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
		HideEventDefault(event:gui.QHideEvent_ITF):void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MetricDefault(m:number):number;
		MinimumSizeHintDefault():core.QSize;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		PaintEngineDefault():gui.QPaintEngine;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		RaiseDefault():void;
		RepaintDefault():void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetFocus2Default():void;
		SetHiddenDefault(hidden:boolean):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowModifiedDefault(vbo:boolean):void;
		SetWindowTitleDefault(vqs:string):void;
		ShowDefault():void;
		ShowEventDefault(event:gui.QShowEvent_ITF):void;
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		SizeHintDefault():core.QSize;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		UpdateDefault():void;
		UpdateMicroFocusDefault():void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQDesignerFormWindowInterfaceFromPointer(ptr:number):QDesignerFormWindowInterface;
	function QDesignerFormWindowInterface_FindFormWindow(widget:widgets.QWidget_ITF):QDesignerFormWindowInterface;
	function QDesignerFormWindowInterface_FindFormWindow2(object:core.QObject_ITF):QDesignerFormWindowInterface;
	const QDesignerFormWindowInterface__EditFeature: number;
	const QDesignerFormWindowInterface__GridFeature: number;
	const QDesignerFormWindowInterface__TabOrderFeature: number;
	const QDesignerFormWindowInterface__DefaultFeature: number;
	const QDesignerFormWindowInterface__SaveAllResourceFiles: number;
	const QDesignerFormWindowInterface__SaveOnlyUsedResourceFiles: number;
	const QDesignerFormWindowInterface__DontSaveResourceFiles: number;
	interface QDesignerFormWindowManagerInterface_ITF extends core.QObject_ITF {
		QDesignerFormWindowManagerInterface_PTR():QDesignerFormWindowManagerInterface;
	}

	class QDesignerFormWindowManagerInterface extends core.QObject {
		___pointer: number;
		QDesignerFormWindowManagerInterface_PTR():QDesignerFormWindowManagerInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectAction(f:(action:number)=>widgets.QAction):void;
		DisconnectAction():void;
		Action(action:number):widgets.QAction;
		ConnectActionGroup(f:(actionGroup:number)=>widgets.QActionGroup):void;
		DisconnectActionGroup():void;
		ActionGroup(actionGroup:number):widgets.QActionGroup;
		ConnectActiveFormWindow(f:()=>QDesignerFormWindowInterface):void;
		DisconnectActiveFormWindow():void;
		ActiveFormWindow():QDesignerFormWindowInterface;
		ConnectActiveFormWindowChanged(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectActiveFormWindowChanged():void;
		ActiveFormWindowChanged(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectAddFormWindow(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectAddFormWindow():void;
		AddFormWindow(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectCloseAllPreviews(f:()=>void):void;
		DisconnectCloseAllPreviews():void;
		CloseAllPreviews():void;
		ConnectCore(f:()=>QDesignerFormEditorInterface):void;
		DisconnectCore():void;
		Core():QDesignerFormEditorInterface;
		ConnectCreateFormWindow(f:(parent:widgets.QWidget,flags:number)=>QDesignerFormWindowInterface):void;
		DisconnectCreateFormWindow():void;
		CreateFormWindow(parent:widgets.QWidget_ITF,flags:number):QDesignerFormWindowInterface;
		ConnectCreatePreviewPixmap(f:()=>gui.QPixmap):void;
		DisconnectCreatePreviewPixmap():void;
		CreatePreviewPixmap():gui.QPixmap;
		ConnectFormWindow(f:(index:number)=>QDesignerFormWindowInterface):void;
		DisconnectFormWindow():void;
		FormWindow(index:number):QDesignerFormWindowInterface;
		ConnectFormWindowAdded(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectFormWindowAdded():void;
		FormWindowAdded(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectFormWindowCount(f:()=>number):void;
		DisconnectFormWindowCount():void;
		FormWindowCount():number;
		ConnectFormWindowRemoved(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectFormWindowRemoved():void;
		FormWindowRemoved(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectFormWindowSettingsChanged(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectFormWindowSettingsChanged():void;
		FormWindowSettingsChanged(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectRemoveFormWindow(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectRemoveFormWindow():void;
		RemoveFormWindow(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectSetActiveFormWindow(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectSetActiveFormWindow():void;
		SetActiveFormWindow(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectShowPluginDialog(f:()=>void):void;
		DisconnectShowPluginDialog():void;
		ShowPluginDialog():void;
		ConnectShowPreview(f:()=>void):void;
		DisconnectShowPreview():void;
		ShowPreview():void;
		ConnectDestroyQDesignerFormWindowManagerInterface(f:()=>void):void;
		DisconnectDestroyQDesignerFormWindowManagerInterface():void;
		DestroyQDesignerFormWindowManagerInterface():void;
		DestroyQDesignerFormWindowManagerInterfaceDefault():void;
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
	function NewQDesignerFormWindowManagerInterfaceFromPointer(ptr:number):QDesignerFormWindowManagerInterface;
	const QDesignerFormWindowManagerInterface__CutAction: number;
	const QDesignerFormWindowManagerInterface__CopyAction: number;
	const QDesignerFormWindowManagerInterface__PasteAction: number;
	const QDesignerFormWindowManagerInterface__DeleteAction: number;
	const QDesignerFormWindowManagerInterface__SelectAllAction: number;
	const QDesignerFormWindowManagerInterface__LowerAction: number;
	const QDesignerFormWindowManagerInterface__RaiseAction: number;
	const QDesignerFormWindowManagerInterface__UndoAction: number;
	const QDesignerFormWindowManagerInterface__RedoAction: number;
	const QDesignerFormWindowManagerInterface__HorizontalLayoutAction: number;
	const QDesignerFormWindowManagerInterface__VerticalLayoutAction: number;
	const QDesignerFormWindowManagerInterface__SplitHorizontalAction: number;
	const QDesignerFormWindowManagerInterface__SplitVerticalAction: number;
	const QDesignerFormWindowManagerInterface__GridLayoutAction: number;
	const QDesignerFormWindowManagerInterface__FormLayoutAction: number;
	const QDesignerFormWindowManagerInterface__BreakLayoutAction: number;
	const QDesignerFormWindowManagerInterface__AdjustSizeAction: number;
	const QDesignerFormWindowManagerInterface__SimplifyLayoutAction: number;
	const QDesignerFormWindowManagerInterface__DefaultPreviewAction: number;
	const QDesignerFormWindowManagerInterface__FormWindowSettingsDialogAction: number;
	const QDesignerFormWindowManagerInterface__StyledPreviewActionGroup: number;
	interface QDesignerLanguageExtension_ITF {
		QDesignerLanguageExtension_PTR():QDesignerLanguageExtension;
	}

	class QDesignerLanguageExtension {
		___pointer: number;
		QDesignerLanguageExtension_PTR():QDesignerLanguageExtension;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDesignerLanguageExtension():void;
	}
	function NewQDesignerLanguageExtensionFromPointer(ptr:number):QDesignerLanguageExtension;
	interface QDesignerMemberSheetExtension_ITF {
		QDesignerMemberSheetExtension_PTR():QDesignerMemberSheetExtension;
	}

	class QDesignerMemberSheetExtension {
		___pointer: number;
		QDesignerMemberSheetExtension_PTR():QDesignerMemberSheetExtension;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCount(f:()=>number):void;
		DisconnectCount():void;
		Count():number;
		ConnectDeclaredInClass(f:(index:number)=>string):void;
		DisconnectDeclaredInClass():void;
		DeclaredInClass(index:number):string;
		ConnectIndexOf(f:(name:string)=>number):void;
		DisconnectIndexOf():void;
		IndexOf(name:string):number;
		ConnectInheritedFromWidget(f:(index:number)=>boolean):void;
		DisconnectInheritedFromWidget():void;
		InheritedFromWidget(index:number):boolean;
		ConnectIsSignal(f:(index:number)=>boolean):void;
		DisconnectIsSignal():void;
		IsSignal(index:number):boolean;
		ConnectIsSlot(f:(index:number)=>boolean):void;
		DisconnectIsSlot():void;
		IsSlot(index:number):boolean;
		ConnectIsVisible(f:(index:number)=>boolean):void;
		DisconnectIsVisible():void;
		IsVisible(index:number):boolean;
		ConnectMemberGroup(f:(index:number)=>string):void;
		DisconnectMemberGroup():void;
		MemberGroup(index:number):string;
		ConnectMemberName(f:(index:number)=>string):void;
		DisconnectMemberName():void;
		MemberName(index:number):string;
		ConnectParameterNames(f:(index:number)=>core.QByteArray[]):void;
		DisconnectParameterNames():void;
		ParameterNames(index:number):core.QByteArray[];
		ConnectParameterTypes(f:(index:number)=>core.QByteArray[]):void;
		DisconnectParameterTypes():void;
		ParameterTypes(index:number):core.QByteArray[];
		ConnectSetMemberGroup(f:(index:number,group:string)=>void):void;
		DisconnectSetMemberGroup():void;
		SetMemberGroup(index:number,group:string):void;
		ConnectSetVisible(f:(index:number,visible:boolean)=>void):void;
		DisconnectSetVisible():void;
		SetVisible(index:number,visible:boolean):void;
		ConnectSignature(f:(index:number)=>string):void;
		DisconnectSignature():void;
		Signature(index:number):string;
		ConnectDestroyQDesignerMemberSheetExtension(f:()=>void):void;
		DisconnectDestroyQDesignerMemberSheetExtension():void;
		DestroyQDesignerMemberSheetExtension():void;
		DestroyQDesignerMemberSheetExtensionDefault():void;
	}
	function NewQDesignerMemberSheetExtensionFromPointer(ptr:number):QDesignerMemberSheetExtension;
	interface QDesignerObjectInspectorInterface_ITF extends widgets.QWidget_ITF {
		QDesignerObjectInspectorInterface_PTR():QDesignerObjectInspectorInterface;
	}

	class QDesignerObjectInspectorInterface extends widgets.QWidget {
		___pointer: number;
		QDesignerObjectInspectorInterface_PTR():QDesignerObjectInspectorInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCore(f:()=>QDesignerFormEditorInterface):void;
		DisconnectCore():void;
		Core():QDesignerFormEditorInterface;
		CoreDefault():QDesignerFormEditorInterface;
		ConnectSetFormWindow(f:(formWindow:QDesignerFormWindowInterface)=>void):void;
		DisconnectSetFormWindow():void;
		SetFormWindow(formWindow:QDesignerFormWindowInterface_ITF):void;
		ConnectDestroyQDesignerObjectInspectorInterface(f:()=>void):void;
		DisconnectDestroyQDesignerObjectInspectorInterface():void;
		DestroyQDesignerObjectInspectorInterface():void;
		DestroyQDesignerObjectInspectorInterfaceDefault():void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		EventDefault(event:core.QEvent_ITF):boolean;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
		HideEventDefault(event:gui.QHideEvent_ITF):void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MetricDefault(m:number):number;
		MinimumSizeHintDefault():core.QSize;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		PaintEngineDefault():gui.QPaintEngine;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		RaiseDefault():void;
		RepaintDefault():void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetFocus2Default():void;
		SetHiddenDefault(hidden:boolean):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowModifiedDefault(vbo:boolean):void;
		SetWindowTitleDefault(vqs:string):void;
		ShowDefault():void;
		ShowEventDefault(event:gui.QShowEvent_ITF):void;
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		SizeHintDefault():core.QSize;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		UpdateDefault():void;
		UpdateMicroFocusDefault():void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQDesignerObjectInspectorInterfaceFromPointer(ptr:number):QDesignerObjectInspectorInterface;
	function NewQDesignerObjectInspectorInterface(parent:widgets.QWidget_ITF,flags:number):QDesignerObjectInspectorInterface;
	interface QDesignerPropertyEditorInterface_ITF extends widgets.QWidget_ITF {
		QDesignerPropertyEditorInterface_PTR():QDesignerPropertyEditorInterface;
	}

	class QDesignerPropertyEditorInterface extends widgets.QWidget {
		___pointer: number;
		QDesignerPropertyEditorInterface_PTR():QDesignerPropertyEditorInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCore(f:()=>QDesignerFormEditorInterface):void;
		DisconnectCore():void;
		Core():QDesignerFormEditorInterface;
		CoreDefault():QDesignerFormEditorInterface;
		ConnectCurrentPropertyName(f:()=>string):void;
		DisconnectCurrentPropertyName():void;
		CurrentPropertyName():string;
		ConnectIsReadOnly(f:()=>boolean):void;
		DisconnectIsReadOnly():void;
		IsReadOnly():boolean;
		ConnectObject(f:()=>core.QObject):void;
		DisconnectObject():void;
		Object():core.QObject;
		ConnectPropertyChanged(f:(name:string,value:core.QVariant)=>void):void;
		DisconnectPropertyChanged():void;
		PropertyChanged(name:string,value:core.QVariant_ITF):void;
		ConnectSetObject(f:(object:core.QObject)=>void):void;
		DisconnectSetObject():void;
		SetObject(object:core.QObject_ITF):void;
		ConnectSetPropertyValue(f:(name:string,value:core.QVariant,changed:boolean)=>void):void;
		DisconnectSetPropertyValue():void;
		SetPropertyValue(name:string,value:core.QVariant_ITF,changed:boolean):void;
		ConnectSetReadOnly(f:(readOnly:boolean)=>void):void;
		DisconnectSetReadOnly():void;
		SetReadOnly(readOnly:boolean):void;
		ConnectDestroyQDesignerPropertyEditorInterface(f:()=>void):void;
		DisconnectDestroyQDesignerPropertyEditorInterface():void;
		DestroyQDesignerPropertyEditorInterface():void;
		DestroyQDesignerPropertyEditorInterfaceDefault():void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		EventDefault(event:core.QEvent_ITF):boolean;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
		HideEventDefault(event:gui.QHideEvent_ITF):void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MetricDefault(m:number):number;
		MinimumSizeHintDefault():core.QSize;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		PaintEngineDefault():gui.QPaintEngine;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		RaiseDefault():void;
		RepaintDefault():void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetFocus2Default():void;
		SetHiddenDefault(hidden:boolean):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowModifiedDefault(vbo:boolean):void;
		SetWindowTitleDefault(vqs:string):void;
		ShowDefault():void;
		ShowEventDefault(event:gui.QShowEvent_ITF):void;
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		SizeHintDefault():core.QSize;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		UpdateDefault():void;
		UpdateMicroFocusDefault():void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQDesignerPropertyEditorInterfaceFromPointer(ptr:number):QDesignerPropertyEditorInterface;
	function NewQDesignerPropertyEditorInterface(parent:widgets.QWidget_ITF,flags:number):QDesignerPropertyEditorInterface;
	interface QDesignerPropertySheetExtension_ITF {
		QDesignerPropertySheetExtension_PTR():QDesignerPropertySheetExtension;
	}

	class QDesignerPropertySheetExtension {
		___pointer: number;
		QDesignerPropertySheetExtension_PTR():QDesignerPropertySheetExtension;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCount(f:()=>number):void;
		DisconnectCount():void;
		Count():number;
		ConnectHasReset(f:(index:number)=>boolean):void;
		DisconnectHasReset():void;
		HasReset(index:number):boolean;
		ConnectIndexOf(f:(name:string)=>number):void;
		DisconnectIndexOf():void;
		IndexOf(name:string):number;
		ConnectIsAttribute(f:(index:number)=>boolean):void;
		DisconnectIsAttribute():void;
		IsAttribute(index:number):boolean;
		ConnectIsChanged(f:(index:number)=>boolean):void;
		DisconnectIsChanged():void;
		IsChanged(index:number):boolean;
		ConnectIsEnabled(f:(index:number)=>boolean):void;
		DisconnectIsEnabled():void;
		IsEnabled(index:number):boolean;
		IsEnabledDefault(index:number):boolean;
		ConnectIsVisible(f:(index:number)=>boolean):void;
		DisconnectIsVisible():void;
		IsVisible(index:number):boolean;
		ConnectProperty(f:(index:number)=>core.QVariant):void;
		DisconnectProperty():void;
		Property(index:number):core.QVariant;
		ConnectPropertyGroup(f:(index:number)=>string):void;
		DisconnectPropertyGroup():void;
		PropertyGroup(index:number):string;
		ConnectPropertyName(f:(index:number)=>string):void;
		DisconnectPropertyName():void;
		PropertyName(index:number):string;
		ConnectReset(f:(index:number)=>boolean):void;
		DisconnectReset():void;
		Reset(index:number):boolean;
		ConnectSetAttribute(f:(index:number,attribute:boolean)=>void):void;
		DisconnectSetAttribute():void;
		SetAttribute(index:number,attribute:boolean):void;
		ConnectSetChanged(f:(index:number,changed:boolean)=>void):void;
		DisconnectSetChanged():void;
		SetChanged(index:number,changed:boolean):void;
		ConnectSetProperty(f:(index:number,value:core.QVariant)=>void):void;
		DisconnectSetProperty():void;
		SetProperty(index:number,value:core.QVariant_ITF):void;
		ConnectSetPropertyGroup(f:(index:number,group:string)=>void):void;
		DisconnectSetPropertyGroup():void;
		SetPropertyGroup(index:number,group:string):void;
		ConnectSetVisible(f:(index:number,visible:boolean)=>void):void;
		DisconnectSetVisible():void;
		SetVisible(index:number,visible:boolean):void;
		ConnectDestroyQDesignerPropertySheetExtension(f:()=>void):void;
		DisconnectDestroyQDesignerPropertySheetExtension():void;
		DestroyQDesignerPropertySheetExtension():void;
		DestroyQDesignerPropertySheetExtensionDefault():void;
	}
	function NewQDesignerPropertySheetExtensionFromPointer(ptr:number):QDesignerPropertySheetExtension;
	interface QDesignerResourceBrowserInterface_ITF extends widgets.QWidget_ITF {
		QDesignerResourceBrowserInterface_PTR():QDesignerResourceBrowserInterface;
	}

	class QDesignerResourceBrowserInterface extends widgets.QWidget {
		___pointer: number;
		QDesignerResourceBrowserInterface_PTR():QDesignerResourceBrowserInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		EventDefault(event:core.QEvent_ITF):boolean;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
		HideEventDefault(event:gui.QHideEvent_ITF):void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MetricDefault(m:number):number;
		MinimumSizeHintDefault():core.QSize;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		PaintEngineDefault():gui.QPaintEngine;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		RaiseDefault():void;
		RepaintDefault():void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetFocus2Default():void;
		SetHiddenDefault(hidden:boolean):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowModifiedDefault(vbo:boolean):void;
		SetWindowTitleDefault(vqs:string):void;
		ShowDefault():void;
		ShowEventDefault(event:gui.QShowEvent_ITF):void;
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		SizeHintDefault():core.QSize;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		UpdateDefault():void;
		UpdateMicroFocusDefault():void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQDesignerResourceBrowserInterfaceFromPointer(ptr:number):QDesignerResourceBrowserInterface;
	interface QDesignerServer_ITF extends core.QObject_ITF {
		QDesignerServer_PTR():QDesignerServer;
	}

	class QDesignerServer extends core.QObject {
		___pointer: number;
		QDesignerServer_PTR():QDesignerServer;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QDesignerSettings_ITF {
		QDesignerSettings_PTR():QDesignerSettings;
	}

	class QDesignerSettings {
		___pointer: number;
		QDesignerSettings_PTR():QDesignerSettings;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDesignerSettings():void;
	}
	interface QDesignerTaskMenuExtension_ITF {
		QDesignerTaskMenuExtension_PTR():QDesignerTaskMenuExtension;
	}

	class QDesignerTaskMenuExtension {
		___pointer: number;
		QDesignerTaskMenuExtension_PTR():QDesignerTaskMenuExtension;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectPreferredEditAction(f:()=>widgets.QAction):void;
		DisconnectPreferredEditAction():void;
		PreferredEditAction():widgets.QAction;
		PreferredEditActionDefault():widgets.QAction;
		ConnectTaskActions(f:()=>widgets.QAction[]):void;
		DisconnectTaskActions():void;
		TaskActions():widgets.QAction[];
		ConnectDestroyQDesignerTaskMenuExtension(f:()=>void):void;
		DisconnectDestroyQDesignerTaskMenuExtension():void;
		DestroyQDesignerTaskMenuExtension():void;
		DestroyQDesignerTaskMenuExtensionDefault():void;
	}
	function NewQDesignerTaskMenuExtensionFromPointer(ptr:number):QDesignerTaskMenuExtension;
	interface QDesignerToolWindow_ITF extends MainWindowBase_ITF {
		QDesignerToolWindow_PTR():QDesignerToolWindow;
	}

	class QDesignerToolWindow extends MainWindowBase {
		___pointer: number;
		QDesignerToolWindow_PTR():QDesignerToolWindow;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QDesignerWidgetBoxInterface_ITF extends widgets.QWidget_ITF {
		QDesignerWidgetBoxInterface_PTR():QDesignerWidgetBoxInterface;
	}

	class QDesignerWidgetBoxInterface extends widgets.QWidget {
		___pointer: number;
		QDesignerWidgetBoxInterface_PTR():QDesignerWidgetBoxInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectFileName(f:()=>string):void;
		DisconnectFileName():void;
		FileName():string;
		ConnectLoad(f:()=>boolean):void;
		DisconnectLoad():void;
		Load():boolean;
		ConnectSave(f:()=>boolean):void;
		DisconnectSave():void;
		Save():boolean;
		ConnectSetFileName(f:(fileName:string)=>void):void;
		DisconnectSetFileName():void;
		SetFileName(fileName:string):void;
		ConnectDestroyQDesignerWidgetBoxInterface(f:()=>void):void;
		DisconnectDestroyQDesignerWidgetBoxInterface():void;
		DestroyQDesignerWidgetBoxInterface():void;
		DestroyQDesignerWidgetBoxInterfaceDefault():void;
		ActionEventDefault(event:gui.QActionEvent_ITF):void;
		ChangeEventDefault(event:core.QEvent_ITF):void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		ContextMenuEventDefault(event:gui.QContextMenuEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		EventDefault(event:core.QEvent_ITF):boolean;
		FocusInEventDefault(event:gui.QFocusEvent_ITF):void;
		FocusNextPrevChildDefault(next:boolean):boolean;
		FocusOutEventDefault(event:gui.QFocusEvent_ITF):void;
		HasHeightForWidthDefault():boolean;
		HeightForWidthDefault(w:number):number;
		HideDefault():void;
		HideEventDefault(event:gui.QHideEvent_ITF):void;
		InitPainterDefault(painter:gui.QPainter_ITF):void;
		InputMethodEventDefault(event:gui.QInputMethodEvent_ITF):void;
		InputMethodQueryDefault(query:number):core.QVariant;
		KeyPressEventDefault(event:gui.QKeyEvent_ITF):void;
		KeyReleaseEventDefault(event:gui.QKeyEvent_ITF):void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MetricDefault(m:number):number;
		MinimumSizeHintDefault():core.QSize;
		MouseDoubleClickEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		MouseReleaseEventDefault(event:gui.QMouseEvent_ITF):void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		NativeEventDefault(eventType:core.QByteArray_ITF,message:number,result:number):boolean;
		PaintEngineDefault():gui.QPaintEngine;
		PaintEventDefault(event:gui.QPaintEvent_ITF):void;
		RaiseDefault():void;
		RepaintDefault():void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetFocus2Default():void;
		SetHiddenDefault(hidden:boolean):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowModifiedDefault(vbo:boolean):void;
		SetWindowTitleDefault(vqs:string):void;
		ShowDefault():void;
		ShowEventDefault(event:gui.QShowEvent_ITF):void;
		ShowFullScreenDefault():void;
		ShowMaximizedDefault():void;
		ShowMinimizedDefault():void;
		ShowNormalDefault():void;
		SizeHintDefault():core.QSize;
		TabletEventDefault(event:gui.QTabletEvent_ITF):void;
		UpdateDefault():void;
		UpdateMicroFocusDefault():void;
		WheelEventDefault(event:gui.QWheelEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQDesignerWidgetBoxInterfaceFromPointer(ptr:number):QDesignerWidgetBoxInterface;
	interface QDesignerWorkbench_ITF extends core.QObject_ITF {
		QDesignerWorkbench_PTR():QDesignerWorkbench;
	}

	class QDesignerWorkbench extends core.QObject {
		___pointer: number;
		QDesignerWorkbench_PTR():QDesignerWorkbench;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface QExtensionFactory_ITF extends QAbstractExtensionFactory_ITF {
		QExtensionFactory_PTR():QExtensionFactory;
		QObject_PTR():core.QObject;
	}

	class QExtensionFactory extends QAbstractExtensionFactory {
		QObject_PTR():core.QObject
		___pointer: number;
		QExtensionFactory_PTR():QExtensionFactory;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreateExtension(f:(object:core.QObject,iid:string,parent:core.QObject)=>core.QObject):void;
		DisconnectCreateExtension():void;
		CreateExtension(object:core.QObject_ITF,iid:string,parent:core.QObject_ITF):core.QObject;
		CreateExtensionDefault(object:core.QObject_ITF,iid:string,parent:core.QObject_ITF):core.QObject;
		ConnectExtension(f:(object:core.QObject,iid:string)=>core.QObject):void;
		DisconnectExtension():void;
		Extension(object:core.QObject_ITF,iid:string):core.QObject;
		ExtensionDefault(object:core.QObject_ITF,iid:string):core.QObject;
		ExtensionManager():QExtensionManager;
		ChildEvent(event:core.QChildEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotify(sign:core.QMetaMethod_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEvent(event:core.QEvent_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLater():void;
		DeleteLaterDefault():void;
		DisconnectNotify(sign:core.QMetaMethod_ITF):void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		Event(e:core.QEvent_ITF):boolean;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilter(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQExtensionFactoryFromPointer(ptr:number):QExtensionFactory;
	function NewQExtensionFactory(parent:QExtensionManager_ITF):QExtensionFactory;
	interface QExtensionManager_ITF extends QAbstractExtensionManager_ITF {
		QExtensionManager_PTR():QExtensionManager;
		QObject_PTR():core.QObject;
	}

	class QExtensionManager extends QAbstractExtensionManager {
		QObject_PTR():core.QObject
		___pointer: number;
		QExtensionManager_PTR():QExtensionManager;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectExtension(f:(object:core.QObject,iid:string)=>core.QObject):void;
		DisconnectExtension():void;
		Extension(object:core.QObject_ITF,iid:string):core.QObject;
		ExtensionDefault(object:core.QObject_ITF,iid:string):core.QObject;
		ConnectRegisterExtensions(f:(factory:QAbstractExtensionFactory,iid:string)=>void):void;
		DisconnectRegisterExtensions():void;
		RegisterExtensions(factory:QAbstractExtensionFactory_ITF,iid:string):void;
		RegisterExtensionsDefault(factory:QAbstractExtensionFactory_ITF,iid:string):void;
		ConnectUnregisterExtensions(f:(factory:QAbstractExtensionFactory,iid:string)=>void):void;
		DisconnectUnregisterExtensions():void;
		UnregisterExtensions(factory:QAbstractExtensionFactory_ITF,iid:string):void;
		UnregisterExtensionsDefault(factory:QAbstractExtensionFactory_ITF,iid:string):void;
		ConnectDestroyQExtensionManager(f:()=>void):void;
		DisconnectDestroyQExtensionManager():void;
		DestroyQExtensionManager():void;
		DestroyQExtensionManagerDefault():void;
		ChildEvent(event:core.QChildEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotify(sign:core.QMetaMethod_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEvent(event:core.QEvent_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLater():void;
		DeleteLaterDefault():void;
		DisconnectNotify(sign:core.QMetaMethod_ITF):void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		Event(e:core.QEvent_ITF):boolean;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilter(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObject():core.QMetaObject;
		MetaObjectDefault():core.QMetaObject;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQExtensionManagerFromPointer(ptr:number):QExtensionManager;
	function NewQExtensionManager(parent:core.QObject_ITF):QExtensionManager;
	interface QFormBuilder_ITF extends QAbstractFormBuilder_ITF {
		QFormBuilder_PTR():QFormBuilder;
	}

	class QFormBuilder extends QAbstractFormBuilder {
		___pointer: number;
		QFormBuilder_PTR():QFormBuilder;
		Pointer():number;
		SetPointer(p:number):void;
		AddPluginPath(pluginPath:string):void;
		ClearPluginPaths():void;
		CustomWidgets():QDesignerCustomWidgetInterface[];
		PluginPaths():string[];
		SetPluginPath(pluginPaths:string[]):void;
		ConnectDestroyQFormBuilder(f:()=>void):void;
		DisconnectDestroyQFormBuilder():void;
		DestroyQFormBuilder():void;
		DestroyQFormBuilderDefault():void;
	}
	function NewQFormBuilderFromPointer(ptr:number):QFormBuilder;
	function NewQFormBuilder():QFormBuilder;
	interface SaveFormAsTemplate_ITF extends widgets.QDialog_ITF {
		SaveFormAsTemplate_PTR():SaveFormAsTemplate;
	}

	class SaveFormAsTemplate extends widgets.QDialog {
		___pointer: number;
		SaveFormAsTemplate_PTR():SaveFormAsTemplate;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface ToolBarManager_ITF extends core.QObject_ITF {
		ToolBarManager_PTR():ToolBarManager;
	}

	class ToolBarManager extends core.QObject {
		___pointer: number;
		ToolBarManager_PTR():ToolBarManager;
		Pointer():number;
		SetPointer(p:number):void;
	}
	interface ToolWindowFontSettings_ITF {
		ToolWindowFontSettings_PTR():ToolWindowFontSettings;
	}

	class ToolWindowFontSettings {
		___pointer: number;
		ToolWindowFontSettings_PTR():ToolWindowFontSettings;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyToolWindowFontSettings():void;
	}
	interface VersionDialog_ITF extends widgets.QDialog_ITF {
		VersionDialog_PTR():VersionDialog;
	}

	class VersionDialog extends widgets.QDialog {
		___pointer: number;
		VersionDialog_PTR():VersionDialog;
		Pointer():number;
		SetPointer(p:number):void;
	}
}