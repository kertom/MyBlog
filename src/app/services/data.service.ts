import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public articles=[{
    title: 'Αν οι σκύλοι οδηγοί μιλούσαν',
    //intro: 'We discover how...',
    articleBody: `Γιατί σκύλοι οδηγοί; Γιατί οι τυφλοί να μη χρησιμοποιούν απλά το λευκό μπαστούνι;

    Χαρίζουν στα αφεντικά τους πολύ περισσότερη ανεξαρτησία.Τον προστατεύουν από τα ψηλά εμπόδια. Τον κάνουν να αισθάνεται μεγαλύτερη ασφάλεια και να κινείται πολύ ταχύτερα στο χώρο.
    Είναι όμοιοι με τους άλλους σκύλους;
    Όχι. Χάρη στην εκπαίδευση, που λαμβάνουν ,στην οποία δαπανούνται τουλάχιστον 25.000 ευρώ καθώς και εκατοντάδες εργατοώρες, δε δαγκώνουν ,δεν επιτίθενται. Γαβγίζουν σπάνια. Η παρουσία τους είναι αθόρυβη και διακριτική. 
    Υπάρχουν πολλοί περιορισμοί όσο αφορά την πρόσβαση των κατοικίδιων ζώων σε δημόσιους χώρους. Ισχύει το ίδιο και για τους σκύλους οδηγούς; 
    Όχι. Ο νόμος ορίζει ξεκάθαρα, ότι μπαίνουν παντού. 
    Υπάρχει κάποιος περιορισμός σε αυτό το “παντού”.
    Όχι. Όταν λέμε παντού, εννοούμε ΠΑΝΤΟΥ. Δεν θεωρούνται κατοικίδια ,αλλά  “ιατρικός εξοπλισμός”.
    Μα τότε γιατί τους αρνείται η είσοδος στα περισσότερα ταξί, ξενοδοχεία,καφετέριες και καταστήματα; Δε γνωρίζουν τον νόμο; 
    Πρόκειται για ένα συνδυασμό άγνοιας και απροθυμίας τήρησης του. Όσο κι αν τους εξηγείς, οι περισσότεροι συνεχίζουν πεισματικά να αρνούνται την είσοδο. Πολλοί προφασίζονται αλλεργία.
    “Δε δεχόμαστε κατοικίδια.” σου λένε. 
    “Μα δεν είναι κατοικίδιο. Βάσει νόμου μπαίνει παντού.” τους απαντάς.
    “Μα θα μας γεμίσει τρίχες.” 
    Βρε τί πάθαμε…
    Κάποιοι μάλιστα ζητούν λεφτά για να καθαρίσουν το ταξί τους .
    Σε άλλες χώρες όμως της κεντρικής και βόρειας Ευρώπης δέχονται αδιαμαρτύρητα τους σκύλους οδηγούς. Ήθελα να ξερα,  δεν είναι κόπος γι’ αυτούς τους ανθρώπους να καθαρίζουν τις τρίχες; Τί αλλάζει από τη μία χώρα στην άλλη;
    Και τα ρατσιστικά και υβριστικά σχόλια δίνουν και παίρνουν και ραγίζουν τις καρδιές των αδελφών μας. Κάποιοι από αυτούς , οι πιο ευαίσθητοι, κλείνονται στα σπίτια τους και αχρηστεύονται έτσι και οι σκύλοι οδηγοί τους. 
    --Άφησε τον σκύλο σου έξω από το κατάστημα μου και ζήτα από κάποιον να σε συνοδέψει, λένε ορισμένοι.
    Ποιός ο λόγος τότε να υπάρχουν; Γιατί να δαπανούνται τόσα εκατομμύρια ευρώ για την εκπαίδευση τους; Από ό,τι φαίνεται λίγοι αντιλαμβάνονται πόση ανεξαρτησία χαρίζουν στα αφεντικά τους. Ανεξαρτησία=Ελευθερία .Για την ελευθερία τους αγωνίστηκαν πολλοί λαοί στην πάροδο των αιώνων. Πόσοι  και πόσοι έχυσαν το αίμα τους, γιατί μεγαλύτερο αγαθό από αυτήν δεν υπάρχει και αξίζει κάθε θυσία για την απόκτηση της. Είναι πιο γλυκιά από το μέλι και πιο απαλή από το πρώτο φως της χαραυγής.
    Όποιος στερεί την ελευθερία και την ανεξαρτησία από τους αδελφούς μας ,μοιάζει με απάνθρωπο τύραννο.
    Τα άτομα με κινητική αναπηρία έχουν το αμαξίδιό τους ως βοηθό και αναπόσπαστο μέσο για να τους συνοδεύει  παντού. Παρομοίως οι τυφλοί έχουν τον σκύλο οδηγό τους. Μπορεί να ζητηθεί από έναν κινητικά ανάπηρο να αφήσει το αμαξίδιό του έξω από κάποιον χώρο και να εισέλθει; 
    Η σχέση ,που αναπτύσσεται μεταξύ ενός τυφλού και του σκύλου οδηγού του είναι πάρα πολύ ισχυρή. Είναι τα “μάτια του”,επέκταση του χεριού του. Μπορεί να ζητηθεί από κάποιον να αφήσει τα μάτια του έξω από έναν χώρο και να εισέλθει; 
    Ούτως ή άλλως δεν θα μπορούσε ένας σκύλος οδηγός να μείνει κάπου ανεπιτήρητος .Υπάρχει πιθανότητα να φάει κάτι και να δηλητηριαστεί.Δυστυχώς έχουν συμβεί τέτοια περιστατικά.
    Αν οι σκύλοι οδηγοί μιλούσαν, θα διεκδικούσαν τα δικαιώματα τους με τον πιο γλυκό, εκλεπτυσμένο και πολιτισμένο τρόπο, έναν τρόπο ασυνήθιστο για το είδος τους. 
    Ο σεβασμός προς τα άτομα με αναπηρία δείχνει τον πολιτισμό ενός κράτους.
    Πολλές χώρες της κεντρικής και βόρειας Ευρώπης καθώς και οι ΗΠΑ είχαν έναν πολιτισμό πολύ υποδεέστερο από τον ελληνικό. Με την πάροδο του χρόνου η κατάσταση άλλαξε ριζικά. Στις μέρες μας η προσέγγιση τους στο θέμα των σκύλων οδηγών αλλά και της αναπηρίας γενικότερα είναι αξιέπαινη σε αντίθεση με ό,τι συμβαίνει στη χώρα μας. 
    Τί πήγε στραβά λοιπόν με τον ελληνικό πολιτισμό; Γιατί έμεινε τόσο πίσω σε σχέση με τους άλλους;
    Τί γίνεται όταν ανοίγεται μία διαθήκη; 
    Οι κληρονόμοι πέφτουν πάνω της. Μαλώνουν μεταξύ τους και προσπαθούν να αρπάξουν όσα περισσότερα μπορούν.
    Υπάρχει περίπτωση κάποιος κληρονόμος να αρνηθεί το μερίδιό του;
    Όχι.Αυτό θα ήταν παράλογο. Το μεταβιβάζει στα παιδιά του και έτσι μεταφέρεται από γενιά σε γενιά.
    Κι αν κάποιος αδικηθεί στη μοιρασιά και δεν λάβει το μερίδιο που του αναλογεί;
    Προσλαμβάνει δικηγόρο για να βρει το δίκιο του και τον πληρώνει αδρά.
    Κληρονομιά λάβαμε κι εμείς από τους αρχαίους προγόνους μας, έναν πολιτισμό και μάλιστα λαμπρό και αξιοζήλευτο, με σεβασμό στις αξίες, στα ιδανικά και στη διαφορετικότητα. Γιατί την αρνηθήκαμε; 
    Μήπως χάθηκε στην πορεία; Μήπως είναι πολύ αργά;
    Όχι. Τα νέα είναι ευχάριστα. Δε χρειάζεται να πληρώσουμε δικηγόρο για να ανακτήσουμε την πολιτιστική μας κληρονομιά. 
    Το αιγαίο χρειάζεται τον ελληνικό ήλιο . Χωρίς αυτόν δεν κάνει. Είναι απαραίτητο συστατικό της ομορφιάς του.  Παρομοίως και η ελληνική σημαία χρειάζεται μπόλικες αχτίδες ανθρωπιάς για να συνεχίζει να ανεμίζει αγέρωχη και περήφανη. 
    Τότε θα φιλήσω διπλά τη γαλανόλευκη και θα καμαρώνω για την καταγωγή μου.
     Εμπρός λοιπόν!`,
    imageUrl: 'assets/guide dog.jpeg',
   },
   {
    title: 'Είναι τα λογοτεχνικά βιβλία ξεπερασμένα;',
    //intro: 'We discover how...',
    articleBody: `Όλως παραδόξως κάποιοι υποστηρίζουν ,ότι είναι. Ο λόγος; Πολλοί λίγοι τα διαβάζουν. Οι περισσότεροι έχουν βρει εναλλακτικούς τρόπους ψυχαγωγίας. Από ό,τι φαίνεται η πλειοψηφία έχει κολλήσει στην τηλεόραση, στα κινητά, στο Facebook και σε άλλα social media καθώς και βιντεοπαιχνίδια.

    Πόσο μοιάζει η κοινωνία με μία αγέλη από πρόβατα;
    
    Αρκετά.Ωστόσο υπάρχει μία ουσιώδης διαφορά. Όταν ένα πρόβατο ξεμακρύνει από το κοπάδι, κινδυνεύει πραγματικά. 
    Δε συμβαίνει όμως το ίδιο με την κοινωνία. Αν κάποιος άνθρωπος ξεχωρίσει από τη μάζα σε ένα θέμα, δεν κινδυνεύει καθόλου. Παρόλαυτα η πλειοψηφία αισθάνεται μεγαλύτερη ασφάλεια όταν ακολουθεί τη μάζα σε όλα ,αδιακρίτως. Φοβάται να ξεχωρίσει. Τρέμει την κοινωνική απόρριψη και την περιθωριοποίηση.  
    Αν ήμουν πρόβατο, δε λέω ,ότι δε θα ακολουθούσα ποτέ την αγέλη. Θα το έκανα μόνο όταν το έκρινα σκόπιμο. Αυτή μου η στάση θα όριζε την ελευθερία μου και θα διατηρούσε ακέραιη την προσωπικότητα μου.
    
    Τί γίνεται όταν η κοινωνία παίρνει καταστροφικές αποφάσεις και κατευθύνσεις;
    
    Τα πρόβατα ακολουθούν τυφλά την αγέλη ακόμα κι όταν αυτή πέφτει στο γκρεμό.Δυστυχώς το ίδιο γίνεται και όταν η κοινωνία υιοθετεί λανθασμένες τάσεις ,όπως η εγκατάλειψη των λογοτεχνικών θησαυρών. Να με συγχωρεί η μάζα αλλά δε θα την ακολουθήσω σε αυτή της την τρέλα κι ας με απορρίψει.
    
    Πρέπει δηλαδή ντε και καλά να διαβάζουμε; 
    Όχι. Τα βιβλία είναι εκεί. Σου λένε: “Αν θές, έλα.”
    
    Λίγοι λοιπόν διαβάζουν και όσο πάνε λιγοστεύουν. Έχει νόημα οι βιβλιοθήκες και τα βιβλιοπωλεία να παραμείνουν ανοιχτά;
    Πόσοι είναι αυτοί ,που στις μέρες μας προσφέρουν τριαντάφυλλα στην αγαπημένη τους; Πόσοι είναι οι ρομαντικοί;
    Ελάχιστοι. Είναι λοιπόν τα λουλούδια ξεπερασμένα;  
    Μήπως θα έπρεπε να κλείσουν και τα ανθοπωλεία;
    Κι αν έκλειναν μαζί με τις  βιβλιοθήκες , αυτοί οι λίγοι ρομαντικοί λάτρες του είδους, θα έπαιρναν τους δρόμους και τα βουνά προκειμένου να βρουν το στοιχείο του πόθου τους. Σαν τον Οδυσσέα, θα περνούσαν τα πάνδεινα για να φτάσουν στην Ιθάκη τους.
    Κι αν τα λουλούδια εξαφανιζόντουσαν από προσώπου γης; 
    Θα φύτευαν καινούρια και θα τα ανέθρεφαν με όλη τη στοργή και την αγάπη τους.
    Κι αν τα βιβλία χανόντουσαν για πάντα;
    Θα έγραφαν δικά τους. Έτσι για να διατηρηθεί αυτό το όμορφο και χαριτωμένο είδος
    Μα τί σχέση έχουν με τα βιβλία;
    Πολλές οι ομοιότητες. Είναι και τα δύο τρυφερά. Το άρωμα τους μεθυστικό. Διεγείρει τις αισθήσεις.
    Επίσης όσοι αγαπούν τα λουλούδια μοιάζουν και οι ίδιοι με αυτά. Παρομοίως και όσοι αγαπούν τα βιβλία. Οι ψυχές τους είναι ρομαντικές και ευαίσθητες σαν κομψά κρίνα.`,
    imageUrl: 'assets/flying-books.jpg',
   },
   {
    title: 'Δεν είμαι εξωγήινος',
    //intro: 'We discover how...',
    articleBody: `Πώς προσεγγίζει η κοινωνία τα άτομα με αναπηρία;

    Δεν είναι βόας, δεν είναι κροταλίας… είναι μία από τα ίδια… απλοί άνθρωποι όπως κι εμείς. Κι όμως τους αντιμετωπίζουμε ως κάτι το ξένο και το εξωγήινο. Τους κάνουμε να νιώθουν περίεργα και να αισθάνονται ως κάτοικοι μιας άλλης πατρίδας ,μακρινής και αλλόκοτης.Συμβάλλουμε έτσι στην κοινωνική τους περιθωριοποίηση.
     Δεν υπάρχει τίποτα κακό με το να πούμε έναν επαινετικό λόγο σε κάποιον συνάνθρωπο μας.Ίσα ίσα ενίοτε βοηθάει. Στην περίπτωση όμως των ατόμων με αναπηρία ,οι έπαινοι γίνονται σε υπερβολικό βαθμό και κάπως άκαιρα και αδιάκριτα. Τους δείχνουμε οίκτο. Τους λέμε “Πω, πω καημένε μου, τί έπαθες…”
    Γιατί άραγε; Επειδή θεωρούμε ,ότι έχουν πεσμένη ψυχολογία και εμείς χρειάζεται να τους την ανεβάσουμε. Για να μην αισθάνονται πια κατώτεροι. 
    Ποιος είπε ,ότι αισθάνονται άσχημα; 
    Ποιος είπε ,ότι αισθάνονται κατώτεροι; Μα κανείς. Εμείς το υποθέτουμε.Το θεωρούμε μάλιστα δεδομένο. Καλλιεργούμε ένα στερεότυπο ,που κληρονομήσαμε από την κοινωνία και την παράδοση. Κι αυτό το στερεότυπο όπως όλα τα άλλα είναι φουλ άδικο.
    Τί γίνεται όταν ένας γεωργός μαζεύει τα ροδάκινα από το χωράφι του; 
    Τα κάνει διαλογή . Άλλα είναι α’ ,τα τρώμε και γλείφουμε τα δάχτυλα μας, άλλα β’ , μισοπωλιούνται κοψοχρονιάς και τα αγοράζουμε για να κάνουμε οικονομία και άλλα γ’ , που γίνονται κομπόστα ή απλά πετιούνται. Το κάθε ροδάκινο είναι μία διαφορετική ιστορία. Τα χαρακτηριστικά του έχουν να κάνουν με το δέντρο και το κλαδί που το “μεγάλωσε”. 
    Μπορεί να κολλήσει κάποιος μία ταμπέλα σε όλα τα ροδάκινα; Αν δοκιμάσει ένα και του βγει σκάρτο ,μπορεί να υποστηρίξει ,ότι και τα υπόλοιπα είναι μάπα; Όχι βέβαια! Θα αδικούσε όλα όσα είναι α’ διαλογής.
    Παρομοίως αν κάποιος υποστηρίξει ,ότι όλα τα άτομα με αναπηρία αισθάνονται χάλια και έχουν χαμηλή αυτοεκτίμηση, είναι πολύ γελασμένος. Επικρατεί επίσης ο μύθος, ότι είναι όλοι σούπερ αγωνιστές με τεράστια αποθέματα ψυχικής δύναμης , μη σας πω και με υπερφυσικές ικανότητες .Τύφλα να χει ο Σούπερμαν δηλαδή. 
    Η αλήθεια είναι ότι ο μπαξές έχει από όλα . Υπάρχουν αυτοί ,που αγωνίζονται και εργάζονται σκληρά και προσπαθούν να είναι το κατά δυνάμει ανεξάρτητοι και υπάρχουν και οι τεμπέληδες ,που τα περιμένουν όλα από τους άλλους. Οι δεύτεροι μάλιστα επαναπαύονται στα επιδόματα και δεν κουνούν ούτε το μικρό τους δαχτυλάκι. Θεωρούν δεδομένο ,ότι οι η κοινωνία πρέπει να τους υπηρετεί.
    
    Κανείς όμως δεν θέλει να αισθάνεται ,ότι τον λυπούνται.
    Σε έναν πόλεμο κολλάει ένας στρατηγός να πει στους στρατιώτες του : “Πω, πω τί τραβάτε εδώ μακριά από τις οικογένειες σας; Περνάτε τόσες κακουχίες και ταλαιπωρείτε. Καημένοι μου …σας λυπάμαι ειλικρινά.”
    Η αλήθεια είναι ,ότι περνούν κακουχίες ,ωστόσο αν τους μιλήσει έτσι ο στρατηγός, σιγά μην πολεμήσουν.Άλλωστε στον πόλεμο υπάρχουν και νικητές.Έχει νόημα να τους αποκαλούμε “καημένους”;
    Αν πάλι τους “νταντεύει” και τους κάνει όλα τα χατίρια ,είναι δυνατόν να σταθούν  αντάξιοι στις δυσκολίες των μαχών;  
    Πόλεμος είναι και η αναπηρία αλλά και η ίδια η ζωή και δε θέλει ηττοπάθειες.
    Επίσης κάτι που παρατηρείται είναι ,ότι πολλού “νταντεύουν” τα άτομα με αναπηρία, τους κάνουν όλα τα χατίρια και τα κακομαθαίνουν. Τους τα δίνουν όλα στο χέρι λες και δεν μπορούν να κάνουν τίποτα, ενώ μπορούν να κάνουν πολλά ,όσο βαριά και να είναι η αναπηρία τους. Σταδιακά τους κάνουν να πιστεύουν ,ότι είναι ανίκανοι.  Ανυπολόγιστη η ζημιά ,που τους προκαλούν άθελα του.  
    
     
    Ένας άλλος μύθος , θέλει τα άτομα με αναπηρία με φωτοστέφανο, άγιοι δηλαδή με τα όλα τους. 
    Τί σας φαίνεται πιο πιθανό/λογικό; Να χαρίζει η αναπηρία φωτοστέφανα και διάθεση για αγωνιστικότητα ή ο τρόπος ,που μεγαλώνει ο καθένας μας, τα παραδείγματα και πρότυπα που έχει από την κούνια του καθώς και η προσπάθεια του να βελτιώνεται καθημερινά; 
    Σε έναν πόλεμο , μετά από μία σκληρή μάχη, δεν υπάρχουν τραυματίες ,ούτε θύματα. Κι όμως τρέχουν τα ασθενοφόρα και οι νεκροφόρες σαν τρελά και με τις σειρήνες τους κάνουν σαματά. Εύλογα αναρωτιέται κανείς, ποιός ο λόγος; Γιατί ντε και καλά πάμε να θρηνήσουμε νεκρούς που δεν υπάρχουν; Γιατί θέλουμε να περιθάλπουμε ανθρώπους ,που χαίρουν άκρας υγείας; Μάλλον επειδή μας φαίνεται απίστευτο ,ότι πολλοί επιβιώνουν τον πόλεμο, υπερπηδούν τα εμπόδια και τις δοκιμασίες του και βγαίνουν αλώβητοι και ψυχικά υγιείς.
    Πόλεμος είναι και η αναπηρίακι όμως υπάρχουν κι αυτοί ,που επιζούν. Συνηθίζουν στις κακουχίες και γίνονται εμπειροπόλεμοι. Το τέλος κάθε μάχης τους βρίσκει όρθιους και χαμογελαστούς και τους διδάσκει κάτι καινούριο.
    Πολλά άτομα με αναπηρία ζουν μία όμορφη ζωή.Χαίρουν άκρας ψυχικής υγείας.  Έχουν μία υπέροχη δουλειά, μία καταπληκτική οικογένεια καθώς και μία ισχυρή αυτοεκτίμηση, αγαθά ,που τα κατέκτησαν με τον ιδρώτα τους και που δεν τους χαρίστηκαν καθόλου. Κι όμως εμείς τους δείχνουμε οίκτο. Τους χτυπάμε στην πλάτη για να τους συμπαρασταθούμε , ενώ κάτι τέτοιο είναι περιττό. Μόλις τελειώσει ένας πόλεμος έχει νόημα να λυπόμαστε τους νικητές;`,
    imageUrl: 'assets/cute-alien.jpg',
   },
   {
    title: 'Πάρ’ το αλλιώς',
    //intro: 'We discover how...',
    articleBody: `Πολλές φορές στη ζωή μας συναντούμε αδιέξοδα. Τα πράγματα δεν εξελίσσονται όπως θα θέλαμε. Πολλές δυσκολίες και συμφορές κάνουν την εμφάνιση τους.Τί κάνουμε τότε;

    Οι περισσότεροι πελαγώνουν. Χάνουν τη μπάλα. “Πω, συμφορά μου…τί έπαθα…Κάηκα…”,φωνάζουν, κλαίνε και ωρύονται. Αλήθεια μπορεί να πούμε ποτέ ,ότι χάθηκαν όλα;
    Τί κάνει ένας οδηγός, όταν συναντάει ένα αδιέξοδο;
    Ρίχνει μια σβέλτη ματιά γύρω του για να διαπιστώσει αν όντως πρόκειται για αδιέξοδο ή αν υπάρχει κάποιος παράδρομος.Αυτό διαρκεί λίγα δευτερόλεπτα. Ύστερα κάνει όπισθεν και συνεχίζει την πορεία του.
    Πόσο πιο εύκολα θα ήταν τα πράγματα ,αν όποτε συναντούμε μία δυσκολία ,κάναμε το ίδιο; Δε θα ήταν πιο συνετό να ψάξουμε για λίγο αν υπάρχει λύση και αν όχι να αποδεχτούμε σύντομα την νέα κατάσταση ,όσο δυσάρεστη και οδυνηρή κι αν μας φαίνεται και να συνεχίσουμε τη ζωή μας;  
    
    Υπάρχουν λύσεις στα αδιέξοδα;
    
    Στην πλειοψηφία των περιπτώσεων, ναι, υπάρχουν. Και γιατί οι άνθρωποι δεν τις βρίσκουν; Δεν τους λείπει το μυαλό για να τις επινοήσουν αλλά η ψυχραιμία. Ας υποθέσουμε ότι κάποιος βρίσκεται στη θάλασσα και αρχίζει να βουλιάζει.Αντί λοιπόν να κουνήσει τα χέρια του και να κολυμπήσει για να βγει στη στεριά, το μυαλό του σταματάει,πανικοβάλλεται και αφήνει το νερό να τον καταπιεί. 
    Έτσι κι εμείς πολλές φορές βουλιάζουμε στα προβλήματα μας και βαλτόνουμε . Ο βάλτος όμως είναι βρωμερός και σιχαμερός. Εφόσον υπάρχουν γύρω μας γάργαρα ποτάμια, ας τα αναζητήσουμε. Γιατί να σπαταλούμε τόσο πολύτιμο χρόνο και ενέργεια σε περιττά λόγια και να χαλάμε τη διάθεση μας. 
    Άλλωστε η γκρίνια φέρνει γρουσουζιά.
    Εμπρός λοιπόν ας κοιτάξουμε μπροστά.`,
    imageUrl: 'assets/road deviation',
   }];

  constructor() { 
  
  }

  getArticleByTitle(articleTitle){
    return new Promise(()=>{
      for(let i=0;i<this.articles.length;i++){
        let currentArticle=this.articles[i];
        console.log('currentArticle= ',currentArticle);
        if(currentArticle.title==articleTitle ){
          return currentArticle;
        }
      }
    });
    
  }


}
